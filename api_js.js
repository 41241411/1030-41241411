const synth = window.speechSynthesis;
const inputTxt = document.querySelector(".txt");
const speakBtn = document.querySelector(".speak-btn");
const speak = () => {
    const msg = inputTxt.value; // 取得輸入的內容
    if (msg) { // 確保內容不為空
        let u = new SpeechSynthesisUtterance(msg);
        u.lang = 'zh-TW'; // 設定語言為中文
        synth.speak(u);
    } else {
        alert("請輸入一些內容！");
    }
};

speakBtn.addEventListener("click", speak); // 當按鈕被點擊時，執行 speak 函數