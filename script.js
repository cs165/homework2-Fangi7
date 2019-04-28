// TODO(you): Write the JavaScript necessary to complete the homework.

// You can access the RESULTS_MAP from "constants.js" in this file since
// "constants.js" has been included before "script.js" in index.html.
const CHECK_URL = "./images/checked.png";
const UNCHECK_URL = "./images/unchecked.png";
var Q1CHECK = "F";
var Q2CHECK = "F";
var Q3CHECK = "F";
const ANS={
  'one':"",
  'two':"",
  'three':""
};
function refresh(targetBlock) {
  if(targetBlock=="one"){
    var reBlock = document.getElementsByClassName('item');
    for(let i=0;i<reBlock.length;i++){
      if(reBlock[i].getAttribute('data-question-id')=="one"){
        reBlock[i].childNodes[3].src = UNCHECK_URL;
        reBlock[i].style.backgroundColor="#f4f4f4";
        reBlock[i].style.opacity = 1;
        Q1CHECK = "F";
      }
    }
  }
  if(targetBlock=="two"){
    var reBlock = document.getElementsByClassName('item');
    for(let i=0;i<reBlock.length;i++){
      if(reBlock[i].getAttribute('data-question-id')=="two"){
        reBlock[i].childNodes[3].src = UNCHECK_URL;
        reBlock[i].style.backgroundColor="#f4f4f4";
        reBlock[i].style.opacity = 1;
        Q2CHECK = "F";
      }
    }
  }
  if(targetBlock=="three"){
    var reBlock = document.getElementsByClassName('item');
    for(let i=0;i<reBlock.length;i++){
      if(reBlock[i].getAttribute('data-question-id')=="three"){
        reBlock[i].childNodes[3].src = UNCHECK_URL;
        reBlock[i].style.backgroundColor="#f4f4f4";
        reBlock[i].style.opacity = 1;
        Q3CHECK = "F";
      }
    }
  }
  console.log(Q1CHECK);
//  image.removeEventListener('click', changeCheck);
}
function getAns(){
  //calculate result
  var res=ANS['one'];
  if(ANS['two']==ANS['two']) res =ANS['three'];

  console.log(res);
  var resDiv = document.querySelector('div.'+res);
  var bottomDiv = document.getElementById('bottomDiv');
  console.log(resDiv);
  resDiv.style.display = 'block';
  bottomDiv.style.display = 'flex';
}
//refresh
var btn = document.getElementById('bottomDiv');
btn.addEventListener('click', (e)=>{
  window.location.reload();
  var elmnt = document.getElementById("author");
  elmnt.scrollIntoView();
});
//image operation
var image = document.getElementsByClassName('item');
console.log(image);
for(let i = 0; i < image.length; i++) {
  //console.log(image[i]);
  image[i].addEventListener('click', (e)=>{
    console.log("---------------------------");
    console.log(ANS);
    if(e.target.dataset.questionId =="one"||e.target.parentNode.dataset.questionId =="one"){
      if(Q1CHECK=="T") refresh("one");
    }
    else if(e.target.dataset.questionId =="two"||e.target.parentNode.dataset.questionId =="two"){
      if(Q2CHECK=="T") refresh("two");
    }
    else if(e.target.dataset.questionId =="three"||e.target.parentNode.dataset.questionId =="three"){
      if(Q3CHECK=="T") refresh("three");
    }
    console.log(e.target.getAttribute('src'));
    console.log(e.target);
    console.log(e.target.className);

    //click gray backround
    if(e.target.childNodes[3]) {
      ANS[e.target.dataset.questionId]= e.target.dataset.choiceId;
      // if(e.target.childNodes[3].getAttribute('src')==UNCHECK_URL){
        e.target.childNodes[3].src=CHECK_URL;
        e.target.style.backgroundColor="#cfe3ff";
        if(e.target.dataset.questionId =="one") {
          Q1CHECK="T";
          //transparent
          var transpar = document.querySelectorAll('[data-question-id~="one"]');
          for(let j=0;j<transpar.length;j++){
            if(transpar[j]!=e.target)transpar[j].style.opacity = 0.6;
          }
        }
        else if(e.target.dataset.questionId =="two") {
          Q2CHECK="T";
          var transpar = document.querySelectorAll('[data-question-id~="two"]');
          for(let j=0;j<transpar.length;j++){
            if(transpar[j]!=e.target)transpar[j].style.opacity = 0.6;
          }
        }
        else if(e.target.dataset.questionId =="three") {
          Q3CHECK="T";
          var transpar = document.querySelectorAll('[data-question-id~="three"]');
          for(let j=0;j<transpar.length;j++){
            if(transpar[j]!=e.target)transpar[j].style.opacity = 0.6;
          }
        }
    }
    //click checkbok
    else if(e.target.className=='checkbox') {
    //  if(e.target.getAttribute('src')==UNCHECK_URL){
        e.target.src=CHECK_URL;
        e.target.parentNode.style.backgroundColor="#cfe3ff";
  //    }
      ANS[e.target.parentNode.dataset.questionId]= e.target.parentNode.dataset.choiceId;
      if(e.target.parentNode.dataset.questionId =="one") {
        Q1CHECK="T";
        var transpar = document.querySelectorAll('[data-question-id~="one"]');
        for(let j=0;j<transpar.length;j++){
          if(transpar[j]!=e.target.parentNode)transpar[j].style.opacity = 0.6;
        }
      }
      else if(e.target.parentNode.dataset.questionId =="two") {
        Q2CHECK="T";
        var transpar = document.querySelectorAll('[data-question-id~="two"]');
        for(let j=0;j<transpar.length;j++){
          if(transpar[j]!=e.target.parentNode)transpar[j].style.opacity = 0.6;
        }
      }
      else if(e.target.parentNode.dataset.questionId =="three") {
        Q3CHECK="T";
        var transpar = document.querySelectorAll('[data-question-id~="three"]');
        for(let j=0;j<transpar.length;j++){
          if(transpar[j]!=e.target.parentNode)transpar[j].style.opacity = 0.6;
        }
      }

     }
    //click dog image
    else{
    //  if(e.target.parentNode.childNodes[3].getAttribute('src')==UNCHECK_URL){
        e.target.parentNode.childNodes[3].src=CHECK_URL;
        e.target.parentNode.style.backgroundColor="#cfe3ff";
  //    }
      ANS[e.target.parentNode.dataset.questionId]= e.target.parentNode.dataset.choiceId;
      if(e.target.parentNode.dataset.questionId =="one") {
        Q1CHECK="T";
        var transpar = document.querySelectorAll('[data-question-id~="one"]');
        for(let j=0;j<transpar.length;j++){
          if(transpar[j]!=e.target.parentNode)transpar[j].style.opacity = 0.6;
        }
      }
      else if(e.target.parentNode.dataset.questionId =="two") {
        Q2CHECK="T";
        var transpar = document.querySelectorAll('[data-question-id~="two"]');
        for(let j=0;j<transpar.length;j++){
          if(transpar[j]!=e.target.parentNode)transpar[j].style.opacity = 0.6;
        }
      }
      else if(e.target.parentNode.dataset.questionId =="three") {
        Q3CHECK="T";
        var transpar = document.querySelectorAll('[data-question-id~="three"]');
        for(let j=0;j<transpar.length;j++){
          if(transpar[j]!=e.target.parentNode)transpar[j].style.opacity = 0.6;
        }
      }

    }
    //check ans are filled
    if(ANS['one']!="" && ANS['two']!="" && ANS['three']!="") getAns();
  });

}
