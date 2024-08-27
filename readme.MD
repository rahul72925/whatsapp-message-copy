# WhatsApp Message Copy

## Overview

**WhatsApp Message Copy** is a Chrome extension that allows users to easily copy messages from WhatsApp Web with just one click. The extension adds a convenient copy button to each message, streamlining the process of copying text directly from the chat.

## Features

- **One-Click Copy**: Quickly copy any message with a single click on the copy button that appears next to each message.
- **Seamless Integration**: The copy button is unobtrusive and integrates smoothly into the WhatsApp Web interface.
- **Clipboard Support**: Directly copies text to your clipboard for easy pasting into other applications.

## Usage

1. **Open WhatsApp Web**: Navigate to [WhatsApp Web](https://web.whatsapp.com/).
2. **Hover Over a Message**: A copy button will appear when you hover over a message.
3. **Click the Button**: Click the button to copy the message text to your clipboard.
4. **Paste the Text**: You can now paste the copied text wherever you need it.

## File Structure

- **`manifest.json`**: Contains the extension's metadata and permissions.
- **`copyscript.js`**: Handles the interaction with the WhatsApp Web page and implements the copy functionality.
- **`style.css`**: Defines the styling for the copy button and other elements.
- **`hello.html`**: A simple popup HTML page (can be customized further if needed).
- **`images/`**: Contains icons and other images used in the extension.

## Permissions

- **`clipboardWrite`**: Allows the extension to copy text to the clipboard.
- **`activeTab`**: Grants permission to interact with the currently active tab.

## Contributing

If you want to contribute to this project, feel free to fork the repository and submit a pull request with your changes. All contributions are welcome and appreciated.

### Development

1. **Clone the Repository**: `git clone https://github.com/yourusername/WhatsApp-Message-Copy.git`
2. **Make Your Changes**: Update the necessary files (`copyscript.js`, `style.css`, etc.).
3. **Reload Extension**: In Chrome, go to `chrome://extensions/`, and click "Reload" on your extension.
4. **Test Changes**: Ensure that your changes work as expected.

## Contact

If you have any questions, feedback, or suggestions, feel free to open an issue on GitHub.
