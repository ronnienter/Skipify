document.getElementById("saveBtn").addEventListener("click", () => {
  const cutoff = document.getElementById("cutoff").value;
  
  if (cutoff && cutoff > 0) {
    chrome.storage.sync.set({ cutoffTime: parseInt(cutoff) }, () => {
      document.getElementById("status").textContent = "Saved!";
      setTimeout(() => {
        document.getElementById("status").textContent = "";
      }, 2000);
    });
  } else {
    document.getElementById("status").textContent = "Please enter a valid number.";
  }
});
