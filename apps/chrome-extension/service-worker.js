chrome.action.onClicked.addlistener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      alert("Hello World!");
    },
  });
});
