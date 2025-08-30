Siteflow Section Expander
A Chrome extension that automatically expands collapsible shipment item headers on the PrintOS website.
📋 Overview
This extension is designed specifically for the PrintOS website (https://ofui.www.printos.com/) to help users quickly expand all shipment sections with a single click. It targets HTML header elements with the class ShipmentItemHeader and adds the ShipmentItemHeader--expanded class to expand them.
✨ Features

Domain-Specific: Only activates on the PrintOS website for security
One-Click Expansion: Expand all shipment sections with a single button click
Smart Detection: Automatically finds all expandable sections on the page
Visual Feedback: Shows progress and results of the expansion process
Error Handling: Gracefully handles edge cases and provides helpful error messages
Dynamic Content Support: Works with content that loads after the initial page load

🚀 Installation
Method 1: Load as Unpacked Extension (Development)

Download the Extension Files

Download all 5 files to a folder on your computer
Create a folder named siteflow-extension
Place all files in this folder


Open Chrome Extensions Page

Open Google Chrome
Navigate to chrome://extensions/
Enable "Developer mode" using the toggle in the top right


Load the Extension

Click "Load unpacked"
Select your siteflow-extension folder
The extension should appear in your extensions list


Pin the Extension (Optional)

Click the puzzle piece icon in Chrome's toolbar
Find "Siteflow Section Expander"
Click the pin icon to keep it visible



📁 File Structure
siteflow-extension/
├── manifest.json       # Extension configuration and permissions
├── popup.html          # User interface for the extension popup
├── popup.js            # Logic for popup interactions
├── content.js          # Script that runs on the website
├── styles.css          # Styling for the popup interface
└── README.md           # This documentation file
🎯 How to Use

Navigate to PrintOS

Go to https://ofui.www.printos.com/
Make sure you're on a page with shipment sections


Open the Extension

Click the Siteflow Section Expander icon in your Chrome toolbar
The popup window will appear


Expand Sections

Click the "Expand All Sections" button
The extension will find and expand all collapsible sections
You'll see a confirmation message with the number of sections expanded



🔧 Technical Details
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

🛠️ Troubleshooting
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

🔒 Privacy & Security

Minimal Permissions: Only requests access to the specific PrintOS domain
No Data Collection: The extension doesn't collect, store, or transmit any user data
Local Operation: All functionality runs locally in your browser
Domain Restricted: Cannot access any other websites for security

📋 Requirements

Browser: Google Chrome (version 88 or higher)
Manifest Version: Uses Manifest V3 (latest Chrome extension standard)
Target Website: PrintOS at https://ofui.www.printos.com/

🔄 Version History
Version 1.0

Initial release
Basic section expansion functionality
Domain restriction to PrintOS website
Error handling and user feedback
Support for dynamically loaded content

🤝 Support
If you encounter issues:

Check the troubleshooting section above
Verify you're using the latest version of Chrome
Make sure you're on the correct PrintOS website
Try refreshing both the page and the extension

📄 License
This extension is provided as-is for use with the PrintOS website. Please ensure you comply with your organization's policies regarding browser extensions.

🏗️ Development Notes
This extension was built using:

Manifest V3: Latest Chrome extension standard
Vanilla JavaScript: No external dependencies
Modern CSS: Responsive design with smooth animations
Content Scripts: For safe DOM manipulation
Message Passing: Secure communication between popup and content script

For developers wanting to modify this extension, the code is well-commented and follows Chrome extension best practices.
