document.getElementById("saveButton")?.addEventListener("click", () => {
  const linkInput = document.getElementById("linkInput") as HTMLInputElement;

  const link = linkInput.value;

  chrome.runtime.sendMessage({ action: "saveLink", link }, (response) => {
    console.log(response.status);
    window.close(); // Close the popup after saving
  });
});
