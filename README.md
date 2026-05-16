# 🎯 Leads Tracker

A simple and lightweight Chrome extension to save and organize links you want to remember. Perfect for keeping track of websites, articles, or any URLs that catch your attention.

## What's This About?

We all have that moment where we find an amazing website and think "I'll remember this" – but then we don't. This little extension solves that problem. Just click, save, and come back to your links whenever you need them.

## Features

✨ **Save Links Manually** - Type in any URL and save it instantly  
🔗 **Save Current Tab** - One click to save whatever webpage you're looking at right now  
💾 **Persistent Storage** - Your links stay saved even after closing the browser (thanks to localStorage)  
🗑️ **Easy Delete** - Double-click the delete button to clear everything and start fresh  
🎨 **Clean & Simple UI** - No clutter, just the essentials

## How to Install

1. Download or clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Turn on **Developer mode** (toggle in the top right)
4. Click **Load unpacked**
5. Select the project folder
6. Done! The extension should now appear in your Chrome toolbar

## How to Use

**Saving a Link Manually:**
1. Click the extension icon
2. Paste a URL in the text field
3. Click "SAVE INPUT"
4. Your link appears in the list below

**Saving the Current Page:**
1. Click the extension icon
2. Click "SAVE TAB"
3. The URL of the page you're viewing gets saved automatically

**Viewing Your Links:**
- All saved links appear as clickable hyperlinks
- Click any link to open it in a new tab

**Clearing Everything:**
- Double-click "DELETE ALL" to wipe the entire list

## Project Structure

```
├── index.html        - The popup window that appears when you click the extension
├── index.css         - All the styling (that nice green theme!)
├── index.js          - The brain of the operation (handles saving, loading, rendering)
├── manifest.json     - Chrome extension configuration file
└── Leads-logo.png    - The extension icon (make sure to add this!)
```

## Technical Details

- **Built with:** Vanilla JavaScript (no frameworks)
- **Storage:** Browser's localStorage API
- **Chrome API:** Uses `chrome.tabs` to access current tab info
- **Manifest:** Version 3 (the latest Chrome extension standard)

## Notes

- Links are stored locally in your browser – they won't sync across devices
- Clearing browser data might delete your saved links
- The icon file (`Leads-logo.png`) needs to exist in the same folder for the extension to display properly

## Future Ideas

Want to make it even better? Consider adding:
- Ability to edit or delete individual links
- Organize links into categories/folders
- Search functionality
- Export links as a text file
- Cloud sync across devices

## License

Feel free to use this however you like! It's a simple project meant for learning and personal use.

---
