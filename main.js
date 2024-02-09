// Cs10 Grade Calculator

// Button Click Listner
document.getElementById("btn").addEventListener("click",btnclicked);

function btnclicked() {
  // Input
 let css1In = +document.getElementById("css1-in").value;
 let sp1In = +document.getElementById("sp1-in").value;
 let css2In = +document.getElementById("css2-in").value;
 let sp2In = +document.getElementById("sp2-in").value;
 let projAIn = +document.getElementById("projA-in").value;

  // Process
  let averageGrade = (css1In +sp1In + css2In +sp2In + projAIn)/5;

  // Output
  document.getElementById("output").innerHTML = averageGrade;
}


// Convert a percentage grade to a corresponding letter grade
function getLetterGrade(percentGrade){
  if(percentGrade> 90 && percentGrade <100){
  return "A";
}else if(percentGrade> 75 && percentGrade <90){
return "B";
}else if(percentGrade> 60 && percentGrade <75){
  return "C";
}else if(percentGrade>50  && percentGrade <60){
  return "D";
}else{
  return "F";
}
}

let cs10Grade = getLetterGrade("averageGrade");
document.getElementById("output2").innerHTML = cs10Grade;

let css1LetterGrade = getLetterGrade("css1In");
document.getElementById("output3").innerHTML = css1LetterGrade;

let sp1LetterGrade = getLetterGrade("sp1In");
document.getElementById("output4").innerHTML = sp1LetterGrade;

let css2LetterGrade = getLetterGrade("css2In");
document.getElementById("output5").innerHTML = css2LetterGrade;

let sp2LetterGrade = getLetterGrade("sp2In");
document.getElementById("output6").innerHTML = sp2LetterGrade;

let projALetterGrade = getLetterGrade("projAIn");
document.getElementById("output7").innerHTML = projALetterGrade;