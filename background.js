chrome.tabs.onActivated.addListener((activeInfo) =>
    chrome.scripting.executeScript({
        target: { tabId: activeInfo.tabId },
        files: ["autoSave.js"]
    })
  )
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) =>
  chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ["autoSave.js"]
  })
)
