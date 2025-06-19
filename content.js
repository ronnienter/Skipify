let skipTime = null;

chrome.storage.sync.get("cutoffTime", ({ cutoffTime }) => {
  if (cutoffTime && cutoffTime > 0) {
    skipTime = cutoffTime;

    const checkAndSkip = () => {
      const audio = document.querySelector("audio");
      if (audio && !audio.paused) {
        if (audio.currentTime >= skipTime) {
          const nextButton = document.querySelector('[data-testid="control-button-skip-forward"]');
          if (nextButton) nextButton.click();
        }
      }
      requestAnimationFrame(checkAndSkip);
    };

    requestAnimationFrame(checkAndSkip);
  }
});
