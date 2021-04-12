//Слайдер
var slider = document.getElementById('slider');
var slider2 = document.getElementById('slider-test');

noUiSlider.create(slider, {
    start: [40, 300],
    connect: true,
    range: {
        'min': 0,
        'max': 1564
    }
});

noUiSlider.create(slider2, {
  start: [40, 300],
  connect: true,
  range: {
    'min': 0,
    'max': 1564
  }
});


const input0 = document.getElementById('input0');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');
const inputs = [input0, input1];

const inputsTest = [input2, input3];

slider.noUiSlider.on('update', function(values, handle){
    inputs[handle].value = Math.round(values[handle]);
});

slider2.noUiSlider.on('update', function(values, handle){
  inputsTest[handle].value = Math.round(values[handle]);
});




//Dropdown
var myBtn = document.getElementsByClassName('drop_btn');
var i;
for (i = 0; i < myBtn.length; i++) {
  myBtn[i].addEventListener('click', function() {
    var myContent = this.nextElementSibling;
    myContent.classList.toggle('active');
    var myImage = this.children[1];
    myImage.classList.toggle('myImage');
  });
}
var myList = document.getElementsByClassName('list_button');
var b;
for (b = 0; b < myList.length; b++) {
  myList[b].addEventListener('click', function() {
    var listPar = this.parentElement,
      mainPar = listPar.parentElement,
      bigPar = mainPar.children[0],
      myTitle = bigPar.children[0];
    myTitle.innerHTML = this.innerHTML;
  })
}


window.onclick = function (event) {
  if(!event.target.matches('.main') && !event.target.matches('.arrow_img') ) {
    var mySelect = document.getElementsByClassName('main_content');
    var x;
    for (x = 0; x < mySelect.length; x++) {
      mySelect[x].classList.remove('active');
    }
    var theImage = document.getElementsByClassName('select_img');
    var z;
    for (z = 0; z < theImage.length; z++) {
      theImage[z].classList.remove('myImage');
    }
  }
}

//Счетчик на первой карточке продукта
var clicks = {0:0, 1:0};

function onClick(index) {
  clicks[index] += 1;
  console.log(index);
  document.getElementById("clicks" + index).innerHTML = clicks[index];
}

function onClick2(index) {

  if (clicks[index] > 0) {
    clicks[index] -= 1;
    document.getElementById("clicks" + index).innerHTML = clicks[index];

  } else if (clicks[index] == 0) {

    document.getElementById("clicks" + index).innerHTML = clicks[index];

  }
}
