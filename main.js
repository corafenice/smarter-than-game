function check(){
var q1 = document.quiz.q1.value;
var q2 = document.quiz.q2.value;
var correct = 0;

      if (q1 == "orange") {
      correct++;
    }
      if (q2 == "all the above") {
        correct++;
      }

var messages = ["Amazing", "You are not very smart"];
var range;

      if (correct < 1){
        range = 1;
      }
      if (correct > 0 && correct < 3){
         range = 0;
      }

  document.getElementById("after_submit").style.visibility = "visible";

  document.getElementById("message").innerHTML = messages[range];
  document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
}


function random(){
  var students = [ 'Jack', 'Sarah', 'Myla', 'Lina']
  var rand = students[Math.floor(Math.random() * students.length)];

document.getElementById("student_name").style.visibility = "visible";
document.getElementById("play").innerHTML = "5th grader " + rand + " please come and play!";
};
