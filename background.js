chrome.browserAction.onClicked.addListener(function (tab) {
  if (tab.url.includes("untappd.com") === true) {
    chrome.tabs.executeScript(null, { file: "jquery-3.4.1.min.js" }, function() {
      chrome.tabs.executeScript(null, { file: 'toastr.js' });
    });
  }
});
