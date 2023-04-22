let isTextVisible = false; // 텍스트가 보이는지 여부

function setup() {
  createCanvas(400, 400);
  textSize(32);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(200);

  // 텍스트를 그립니다.
  if (isTextVisible) {
    fill(random(255), random(255), random(255));
    text("이현준 못생김", width/2, height/2);
  }
}

function mouseClicked() {
  // 클릭 시 텍스트를 보이거나 숨깁니다.
  isTextVisible = !isTextVisible;
}
