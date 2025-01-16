chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url) {
    chrome.notifications.create({
      type: "basic",
      iconUrl: "icon.png",
      title: "Link Notifier",
      message: "Do you want to save this link?",
      priority: 2,
      buttons: [{ title: "Yes" }, { title: "No" }],
    });
  }
});
