{
/**
 * 一時保存ボタンを検索する
 * @returns  Element | undefined
 */
let findSaveButton = () => {
  for (let i = 0; buttons.length > i; i++) {
    if (buttons[i].innerHTML.indexOf("一時保存") !== -1) {
      return buttons[i];
    }
  }
};

// 以下処理内容-------------------------------------------
// すべてのボタンを取得して、その内のSaveボタンだけ取得
let buttons = document.getElementsByClassName("v-btn");
let saveButton = findSaveButton();
// Saveボタンを発火させる
let e = new Event("click");
console.log(saveButton);
saveButton.dispatchEvent(e);
}