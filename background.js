/**
 * 現在のタブを取得
 * @returns 現在のタブ
 */
async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

// タブが閉じられたときに発火
chrome.tabs.onRemoved.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["scripts/idleAutoSave.js"],
  });
});

// カリキュラム作成ページを15秒以上放置した場合に発火
chrome.idle.setDetectionInterval(15);
chrome.idle.onStateChanged.addListener((newState) => {
  if (newState == "idle") {
    getCurrentTab().then((tab) =>
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["scripts/idleAutoSave.js"],
      })
    );
  }
});
