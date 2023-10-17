function startListeningAndOpenSearch() {
  const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
  recognition.lang = navigator.language || "en-US";

  recognition.onresult = function (event) {
    const transcript = event.results[0][0].transcript;
    document.getElementById("input-box").value = transcript;
    openSearchBox();
  };

  recognition.start();
}

function openSearchBox() {
  const searchBox = document.querySelector(".search-box");
  const searchButtonInit = document.querySelector(".search-button-init");
  searchBox.classList.add("open");
  searchButtonInit.classList.add("hide");
}
