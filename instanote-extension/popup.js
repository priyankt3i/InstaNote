document.getElementById('saveUrl').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const currentUrl = tabs[0].url;
      chrome.runtime.sendMessage({ action: 'syncData', data: { url: currentUrl } });
    });
  });
  
  document.getElementById('saveText').addEventListener('click', () => {
    const selectedText = window.getSelection().toString();
    chrome.runtime.sendMessage({ action: 'syncData', data: { text: selectedText } });
  });
  