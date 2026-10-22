
// クリスマスリースづくりのボタン
const button = document.querySelector(
  '[aria-controls="wreath-detail"]'
);

const detail = document.getElementById("wreath-detail");

button.addEventListener("click", function () {
  detail.hidden = !detail.hidden;

  if (detail.hidden) {
    button.textContent = "詳しく見る";
  } else {
    button.textContent = "閉じる";
  }
});


// クリスマスカード工作のボタン
const cardButton = document.querySelector(
  '[aria-controls="card-detail"]'
);

const cardDetail = document.getElementById("card-detail");

cardButton.addEventListener("click", function () {
  cardDetail.hidden = !cardDetail.hidden;

  if (cardDetail.hidden) {
    cardButton.textContent = "詳しく見る";
  } else {
    cardButton.textContent = "閉じる";
  }
});


// 冬のおはなし会のボタン
const storyButton = document.querySelector(
  '[aria-controls="story-detail"]'
);

const storyDetail = document.getElementById("story-detail");

storyButton.addEventListener("click", function () {
  storyDetail.hidden = !storyDetail.hidden;

  if (storyDetail.hidden) {
    storyButton.textContent = "詳しく見る";
  } else {
    storyButton.textContent = "閉じる";
  }
});
