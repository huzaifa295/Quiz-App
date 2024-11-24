var head = document.querySelector(".head");
var inputs = document.querySelector(".inputs");

var information = document.querySelector(".information");
var quizQues = document.querySelector(".quizQues");

var ques=document.getElementById('ques')
var quesOption = document.getElementById('quesOptions').children

function startQuiz() {
  head.style.display = "none";
  inputs.style.display = "none";

  information.style.display = "block";
  quizQues.style.display = "block";

  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var rollNum = document.getElementById("rollNum");
  var institute = document.getElementById("institute");

//   if(!name || !email || !rollNum || !institute){
//     alert('Fields are required')
//     return
// }

  var userName = document.getElementById("userName");
  var userEmail = document.getElementById("userEmail");
  var userRoll = document.getElementById("userRoll");
  var userInstitute = document.getElementById("userInstitute");

  userName.innerHTML=name
  userEmail.innerHTML=email
  userRoll.innerHTML=rollNum
  userInstitute.innerHTML=institute

  ques.innerHTML = QuizQues[quesCount].question
  quesOption[0].innerHTML = QuizQues[quesCount].options.a
  quesOption[1].innerHTML = QuizQues[quesCount].options.b
  quesOption[2].innerHTML = QuizQues[quesCount].options.c
  quesOption[3].innerHTML = QuizQues[quesCount].options.d

}

var quesCount=0

var QuizQues=[
    {
        question:'HTML stand for.....?',
        options:{
            a:'High Talent Mental Language',
            b:'High Text Made Language',
            c:'Hyper Text Markup Language',
            d:'High Text Markup Language'
        },
        answer:'High Text Markup Language'
    },
    {
        question: "CSS stand for.....?",
        options: {
          a: "Cascading Style Sheet",
          b: "Cat style Sheet",
          c: "Cute Style Sheet",
          d: "Copy Style Sheet",
        },
        answer:'Cascading Style Sheet'
      },
      {
        num: "1",
        question: "javascript is a ??",
        options: {
          a: "Programming Language",
          b: "Assembly Language",
          c: "High level Language",
          d: "Scripted Language",
        },
        answer: "Scripted Language",
      }
]

function nextQuest(){
    if(quesCount<quesOption.length-1){
        quesCount++
        ques.innerHTML = QuizQues[quesCount].question
  quesOption[0].innerHTML = QuizQues[quesCount].options.a
  quesOption[1].innerHTML = QuizQues[quesCount].options.b
  quesOption[2].innerHTML = QuizQues[quesCount].options.c
  quesOption[3].innerHTML = QuizQues[quesCount].options.d
    }else{
        console.log('Out of Questions')
    }
}

for(var i=0; i<quesOption.length ;i++){
    console.log(quesOption[i])
    // quesOption[i].className = 'cursor-pointer'
    quesOption[i].setAttribute('onclick', 'selectedOption(this)')
  }

function selectedOption(ele){
    if(ele.innerHTML==QuizQues[quesCount].answer){
      ele.style.color='green'
      ele.style.pointerEvents='none'
    }else{
        ele.style.color='red'
    }


    for(var ChoseOption of quesOption){
      ChoseOption.style.pointerEvent='none'
}
}