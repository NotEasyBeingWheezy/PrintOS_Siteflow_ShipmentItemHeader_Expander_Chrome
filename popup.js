// Popup JavaScript for Siteflow Section Expander
document.addEventListener('DOMContentLoaded', function() {
  const expandBtn = document.getElementById('expandBtn');
  const buttonText = document.querySelector('.button-text');
  const statusDiv = document.getElementById('status');

  // Check if we're on the correct domain
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    const currentUrl = tabs[0].url;
    
    if (!currentUrl.includes('ofui.www.printos.com')) {
      expandBtn.disabled = true;
      expandBtn.classList.add('disabled');
      buttonText.textContent = 'Wrong Website';
      statusDiv.textContent = 'Extension only works on PrintOS website';
      statusDiv.classList.add('error');
      return;
    }

    // Enable the button for the correct website
    expandBtn.addEventListener('click', function() {
      // Disable button to prevent multiple clicks
      expandBtn.disabled = true;
      buttonText.textContent = 'Expanding...';
      statusDiv.textContent = 'Searching for sections...';
      statusDiv.className = 'status-message info';

      // Send message to content script
      chrome.tabs.sendMessage(tabs[0].id, {action: 'expandSections'}, function(response) {
        // Handle potential errors
        if (chrome.runtime.lastError) {
          console.error('Error:', chrome.runtime.lastError);
          statusDiv.textContent = 'Error: Content script not loaded. Try refreshing the page.';
          statusDiv.className = 'status-message error';
          resetButton();
          return;
        }

        // Handle response from content script
        if (response) {
          if (response.success) {
            buttonText.textContent = 'Sections Expanded';
            expandBtn.classList.add('success');
            
            if (response.count > 0) {
              statusDiv.textContent = `Successfully expanded ${response.count} section(s)`;
              statusDiv.className = 'status-message success';
            } else {
              statusDiv.textContent = 'No expandable sections found on this page';
              statusDiv.className = 'status-message warning';
            }
            
            // Reset button after 2 seconds
            setTimeout(resetButton, 2000);
          } else {
            statusDiv.textContent = response.error || 'Failed to expand sections';
            statusDiv.className = 'status-message error';
            resetButton();
          }
        } else {
          statusDiv.textContent = 'No response from page. Try refreshing.';
          statusDiv.className = 'status-message error';
          resetButton();
        }
      });
    });
  });

  function resetButton() {
    expandBtn.disabled = false;
    expandBtn.classList.remove('success');
    buttonText.textContent = 'Expand All Sections';
    
    // Clear status message after a delay
    setTimeout(() => {
      if (statusDiv.classList.contains('success') || statusDiv.classList.contains('warning')) {
        statusDiv.textContent = '';
        statusDiv.className = 'status-message';
      }
    }, 3000);
  }
});