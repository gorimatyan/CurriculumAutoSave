
/**
 * 一時保存ボタンを検索する
 * @returns  Element | undefined
 */
const findSaveButton = () => {
  for (let i = 0; buttons.length > i; i++) {
    if (buttons[i].innerHTML.indexOf("一時保存") !== -1) {
      	return buttons[i];
    }
  }
};
/**
 * 引数に指定した数値を0から数えた範囲として0 ~ (max-1)の整数を返す
 * @param {number} max 
 * @returns n (0 < n < max-1)
 */
function getRandomInt(max) {
	return Math.floor(Math.random() * max);
  }

/**
 * inputタグにオートセーブのトリガーを付与する
 * @param {HTMLCollectionOf<HTMLInputElement>} inputs
 * @return void
 */
const addSaveTriggerToInputs = (inputs) => {
	for (let i = 0; inputs.length > i; i++) {
		inputs[i].addEventListener("focusout", () => {
			const int = getRandomInt(3);
			if (int !== 1) {
				const e = new Event('click');
				const saveButton = findSaveButton();
				console.log(saveButton)
				setTimeout(() => {
					saveButton.dispatchEvent(e)
				}, 5000);
			}
		});
	}
}
// 以下処理内容----------------------------------------
let buttons = document.getElementsByClassName("v-btn");
console.log(buttons);
console.log(findSaveButton());
let inputs = document.getElementsByTagName("input");
addSaveTriggerToInputs(inputs);
