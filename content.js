// Content script for Siteflow Section Expander
console.log('Siteflow Section Expander content script loaded');

// Listen for messages from popup
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'expandSections') {
    try {
      const result = expandShipmentHeaders();
      sendResponse({
        success: true,
        count: result.count,
        message: result.message
      });
    } catch (error) {
      console.error('Error expanding sections:', error);
      sendResponse({
        success: false,
        error: error.message || 'Unknown error occurred'
      });
    }
  }
  
  // Return true to indicate we will send a response asynchronously
  return true;
});

function expandShipmentHeaders() {
  // Find all header elements with ShipmentItemHeader class
  const headers = document.querySelectorAll('header.ShipmentItemHeader');
  
  console.log(`Found ${headers.length} ShipmentItemHeader elements`);
  
  if (headers.length === 0) {
    return {
      count: 0,
      message: 'No ShipmentItemHeader elements found on this page'
    };
  }

  let expandedCount = 0;
  let alreadyExpandedCount = 0;

  headers.forEach((header, index) => {
    try {
      // Check if already expanded
      if (header.classList.contains('ShipmentItemHeader--expanded')) {
        alreadyExpandedCount++;
        console.log(`Header ${index + 1} already expanded`);
        return;
      }

      // Add the expanded class
      header.classList.add('ShipmentItemHeader--expanded');
      expandedCount++;
      
      console.log(`Expanded header ${index + 1}:`, header);
      
      // Optional: Trigger any click events if needed
      // This might be necessary if the website relies on click events to expand sections
      const clickableElement = header.querySelector('[role="button"], button, .clickable');
      if (clickableElement && !header.classList.contains('ShipmentItemHeader--expanded')) {
        clickableElement.click();
      }
      
    } catch (error) {
      console.error(`Error processing header ${index + 1}:`, error);
    }
  });

  // Wait a bit for any animations or dynamic content
  setTimeout(() => {
    // Double-check that classes were added successfully
    const expandedHeaders = document.querySelectorAll('header.ShipmentItemHeader.ShipmentItemHeader--expanded');
    console.log(`Verification: ${expandedHeaders.length} headers now have expanded class`);
  }, 100);

  let message = `Processed ${headers.length} header(s). `;
  if (expandedCount > 0) {
    message += `Expanded ${expandedCount} section(s).`;
  }
  if (alreadyExpandedCount > 0) {
    message += ` ${alreadyExpandedCount} already expanded.`;
  }

  return {
    count: expandedCount,
    message: message
  };
}

// Function to handle dynamically loaded content
function observeForNewHeaders() {
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'childList') {
        // Check if any new ShipmentItemHeader elements were added
        mutation.addedNodes.forEach(function(node) {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const newHeaders = node.querySelectorAll ? node.querySelectorAll('header.ShipmentItemHeader') : [];
            if (newHeaders.length > 0) {
              console.log(`Detected ${newHeaders.length} new ShipmentItemHeader elements`);
            }
          }
        });
      }
    });
  });

  // Start observing
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  return observer;
}

// Initialize observer for dynamic content
let contentObserver;
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    contentObserver = observeForNewHeaders();
  });
} else {
  contentObserver = observeForNewHeaders();
}

// Cleanup function (optional)
window.addEventListener('beforeunload', function() {
  if (contentObserver) {
    contentObserver.disconnect();
  }
});