chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'extractData') {
      const pageTitle = document.title;
      const pageURL = window.location.href;
      const pageText = document.body.innerText;
      
      sendResponse({
        title: pageTitle,
        url: pageURL,
        text: pageText
      });
    }
  });
  