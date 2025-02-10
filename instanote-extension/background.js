chrome.runtime.onInstalled.addListener(() => {
    console.log('InstaNote extension installed');
  });
  
  // Sync function to push data to cloud
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'syncData') {
      fetch('https://api.instanote.com/sync', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: message.data }),
      }).then(response => response.json())
        .then(result => sendResponse({ status: 'success', result }))
        .catch(error => sendResponse({ status: 'error', error }));
  
      return true; // To indicate asynchronous response
    }
  });
  