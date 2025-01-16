chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "saveLink") {
    chrome.storage.local.set({ savedLink: request.link }, () => {
      console.log("Link saved:", request.link);
    });
    sendResponse({ status: "success" });
  }
});
