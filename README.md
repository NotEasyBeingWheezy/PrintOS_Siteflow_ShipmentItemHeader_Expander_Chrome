Siteflow Section Expander


Overview
This extension is designed specifically for the PrintOS website (https://ofui.www.printos.com/) to help users quickly expand all shipment sections within a Jobs List with a single click. It targets HTML header elements with the class ShipmentItemHeader and adds the ShipmentItemHeader--expanded class to expand them.

Features

Domain-Specific - Only activates on the PrintOS website.
One-Click Expansion - Expand all shipment sections with a single button click.
Error Handling - Handles edge cases and provides error messages.
Dynamic Content Support - Works with content that loads after the initial page load.

Installation
Load unpacked extention into chrome://extensions/ using developer mode.


File Structure
siteflow-extension/
├── manifest.json     Extension configuration and permissions
├── popup.html        User interface for the extension popup
├── popup.js          Logic for popup interactions
├── content.js        Script that runs on the website
├── styles.css        Styling for the popup interface
└── README.md         This documentation file
🎯 How to Use


Technical Details

Files Explained
manifest.json: Configuration file that tells Chrome about the extension, its permissions, and which files to use
popup.html: The visual interface users see when clicking the extension icon
popup.js: Handles button clicks and communicates with the content script
content.js: Runs on the PrintOS website and performs the actual section expansion
styles.css: Makes the popup look professional and user-friendly

How It Works
The extension only activates on the specified PrintOS domain
When you click "Expand All Sections", the popup sends a message to the content script
The content script searches for all <header> elements with class ShipmentItemHeader
It adds the class ShipmentItemHeader--expanded to each found header
The website's existing CSS handles the visual expansion
Results are reported back to the popup for user feedback

Troubleshooting

Extension Won't Load
Check file names: Ensure all files are named exactly as specified
Verify folder structure: All files should be in the same folder
Enable Developer Mode: Make sure it's enabled in chrome://extensions/

"Wrong Website" Message
Check URL: The extension only works on https://ofui.www.printos.com/
Refresh page: Try refreshing the PrintOS page and clicking the extension again

"No Sections Found" Message
Page content: The current page may not have any expandable shipment sections
Dynamic loading: Wait for the page to fully load before using the extension
Try different page: Navigate to a page with shipment items

Extension Not Responding
Refresh the webpage
Reload the extension:
Go to chrome://extensions/
Find "Siteflow Section Expander"
Click the refresh/reload button

Check browser console (F12 → Console) for error messages

Version History
Version 1.0

Initial release
Basic section expansion functionality
Domain restriction to PrintOS website
Error handling and user feedback
Support for dynamically loaded content

Development Notes
This extension was built using:
Manifest V3
Vanilla JavaScript: No external dependencies
Modern CSS
Content Scripts: For safe DOM manipulation