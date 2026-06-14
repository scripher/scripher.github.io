let is_dark = 0;
let is_long_press = 0;
let timer = 0;

// Home键的构造
const home = document.createElement("button");
home.id = "home_btn";
home.textContent = "🏠";

// 覆盖层的构造
const dark_layer = document.createElement("div");
dark_layer.className = "overlay_dark";

const box_container = document.createElement("div");
box_container.className = "nine_box_center";

const boxes = Array.from({length: 9}, (_, index) => {
  let temp = document.createElement("div");
  temp.id = `the_box_${index}`;
  temp.className = "the_box";
  return temp;
});

document.body.appendChild(home);
box_container.append(...boxes);
dark_layer.appendChild(box_container);

function add_dark() {
  document.body.appendChild(dark_layer);
  is_dark = 1;
}

function remove_dark() {
  document.body.removeChild(dark_layer);
  is_dark = 0;
}

// 长按的事件
home.addEventListener("mousedown", function() {
  clearTimeout(timer);
  timer = setTimeout(function() {
    is_long_press = 1;
    if (is_dark === 1) {
      remove_dark();
    } else {
      add_dark();
    }
  }, 2000);
});

home.addEventListener("mouseup", function() {
  clearTimeout(timer);
})

home.addEventListener("mouseleave", function() {
  clearTimeout(timer);
})

// 单击的事件，需要处理与长按的冲突&已变黑和未变黑的不同行为
home.addEventListener("click", function() {
  if (is_long_press === 1) {
    is_long_press = 0;
    return;
  } else {
    clearTimeout(timer);
    if (is_dark === 1) {
      remove_dark();
    } else {
      window.location.href = "https://scripher.github.io";
    }
  }
});
