var editMode = false;

function updateIcon(tab) {
  editMode = !editMode;

  chrome.browserAction.setIcon({
    path: editMode ? 'icon2.png' : 'icon1.png'
  });

  var code = editMode ? 'document.body.contentEditable = "true"; document.designMode = "on";' : 'document.body.contentEditable = "false"; document.designMode = "off";';

  chrome.tabs.executeScript(tab.id, {
    code: code
  }, function() {

  });
}

chrome.browserAction.onClicked.addListener(updateIcon);
