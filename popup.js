// popup.js
document.addEventListener('DOMContentLoaded', function () {
    const copyButton = document.getElementById('copy-message-button');
    const statusMessage = document.getElementById('status-message');
  
    copyButton.addEventListener('click', function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'copyMessage' }, function (response) {
          if (response && response.success) {
            statusMessage.textContent = 'Message copied!';
          } else {
            statusMessage.textContent = 'Failed to copy message.';
          }
        });
      });
    });
  });
  