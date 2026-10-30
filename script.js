
// 各イベントの詳細を開閉します。
document.querySelectorAll(".detail-toggle").forEach(function (button) {
  const detail = document.getElementById(button.getAttribute("aria-controls"));
  const detailLabel = button.textContent.trim();

  button.addEventListener("click", function () {
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    detail.hidden = isExpanded;
    button.setAttribute("aria-expanded", String(!isExpanded));
    button.textContent = isExpanded ? detailLabel : "閉じる";
  });
});

// 詳細から申し込みへ進むと、選んだイベント名をフォームに入れます。
const eventSelect = document.getElementById("event-name");
document.querySelectorAll(".apply-link").forEach(function (link) {
  link.addEventListener("click", function () {
    eventSelect.value = link.dataset.event;
  });
});

// フォームはデモです。送信を止めてページ内に受付メッセージを表示します。
const form = document.getElementById("application-form");
const formMessage = document.getElementById("form-message");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  formMessage.textContent = "デモ受付が完了しました。入力内容は送信・保存されていません。";
  formMessage.hidden = false;
  formMessage.focus();
});

form.addEventListener("input", function () {
  formMessage.hidden = true;
});
