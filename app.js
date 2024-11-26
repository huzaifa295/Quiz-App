var head = document.querySelector(".head");
var inputs = document.querySelector(".inputs");

var information = document.querySelector(".information");
var quizQues = document.querySelector(".quizQues");

var ques=document.getElementById('ques')
var quesOption = document.getElementById('quesOptions').children

var nextBtn=document.getElementById('nextBtn')

function startQuiz() {
  
  
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var rollNum = document.getElementById("rollNum").value;
  var institute = document.getElementById("institute").value;
  
  if(!name || !email || !rollNum || !institute){
    alert('Fields are required')
    return
  }
  
  head.style.display = "none";
  inputs.style.display = "none";
  information.style.display = "block";
  quizQues.style.display = "block";
  
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


for(var liOption of quesOption){
  liOption.setAttribute('onclick', 'selectedOption(this)')
  liOption.style.cursor='pointer'
}

function nextQuest(){

  for(var liOption of quesOption){
    // liOption.style.cursor='pointer'
    liOption.classList.remove('colorRed','colorGreen','pointerEvent')
  } 

  nextBtn.style.display='none'

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


function selectedOption(ele){



    if(ele.innerHTML==QuizQues[quesCount].answer){
      ele.setAttribute('class','colorGreen')
    }else{
      ele.setAttribute('class','colorRed')
    }


    for(var liOption of quesOption){
      liOption.classList.add('pointerEvent')
}

nextBtn.style.display='block'

}