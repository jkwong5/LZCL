alert("Hello");

function blankCheck(){

var error = "";
var email = document.getElementById('email');
var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

if(document.getElementById('fname').value===""){
  error += "First name field is empty. ";
  (document.getElementById('fname').style.borderColor="red");
}
if(document.getElementById('lname').value===""){
  error += "Last name field is empty. ";
  (document.getElementById('lname').style.borderColor="red");
}
if(!filter.test(email.value)){
  error += "This is not a correct email address. ";
  (document.getElementById('email').style.borderColor="red");
}
if(document.getElementById('state').value===""){
  error += "Please input letters for state. ";
  (document.getElementById('state').style.borderColor="red");
}
if(document.getElementById('zip').value===""){
  error += "Incorrect zip code. ";
  (document.getElementById('zip').style.borderColor="red");
}
if(document.getElementById('role').value===""){
  error += "Please enter the desired role. ";
  (document.getElementById('role').style.borderColor="red");
}
if(document.getElementById('pos').value===""){
  error += "Please enter current role. ";
  (document.getElementById('pos').style.borderColor="red");
}
if(document.getElementById('recruiter').value===""){
  error += "Please enter recruiter name or human resources. ";
  (document.getElementById('recruiter').style.borderColor="red");
}
if(document.getElementById('cname').value===""){
  error += "Please enter the company name. ";
  (document.getElementById('cname').style.borderColor="red");
}
if(error !== ""){
  alert(error);
return false;
}
else{
  var fN = document.getElementById('fname').value;
  var lN = document.getElementById('lname').value;
  var eM = document.getElementById('email').value;
  var sN = document.getElementById('sname').value;
  var cT = document.getElementById('city').value;
  var sT = document.getElementById('state').value;
  var zC = document.getElementById('zip').value;
  var rL = document.getElementById('role').value;
  var rN = document.getElementById('recruiter').value;
  var cN = document.getElementById('cname').value;
  var cR = document.getElementById('pos').value;
  document.getElementById('fullName').innerHTML = fN + " " + lN;
  document.getElementById('eMail').innerHTML = eM;
  document.getElementById('street').innerHTML = sN;
  document.getElementById('country').innerHTML = cT + ", " + sT + ", " + zC;
  document.getElementById('desired').innerHTML = rL;
  document.getElementById('signature').innerHTML = fN + " " + lN;
  document.getElementById('salutation').innerHTML = rN + ",";
  document.getElementById('company').innerHTML = cN;
  document.getElementById('companys').innerHTML = cN;
  document.getElementById('current').innerHTML = cR;
  return false;
}
}
/*
var formInput = document.getElementById('fname').value;
document.getElementById('textResult').innerHTML = formInput;
return false;
var counter = 1;
var limit = 10;
function addSkill(divName) {
var addInput = $('skills');
  if (counter == limit){
    alert("Maximum Number of Skills Added");
  }
  else{
    var newSkill = document.createElement('div');
    newSkill.innerHTML = "<br><input type='text' name='inputs[]'>";
    document.getElementById(divName).appendChild(newSkill);
    counter++;
    return false;
  }
}
*/
  var i = 0;
function skillFunction(){
  var sK = document.getElementById('skill').value;
  var addA = document.createElement("a");
  var a = document.createTextNode(sK);
  var b = document.createTextNode(sK + ", ");
  var c = document.createTextNode(", and " + sK);
    if (sK === ""){
      alert("Please enter a skill.");
    }
    else if (i === 0){
      addA.appendChild(a);
      document.getElementById("skillInput").appendChild(addA);
      document.getElementById('skill').value = "";
      i = 1;
      }
    else if (i === 1){
      addA.appendChild(c);
      document.getElementById("skillInput").appendChild(addA);
      document.getElementById('skill').value = "";
      i = 2;
      }
    else{
      addA.appendChild(b);
      document.getElementById("skillInput").insertBefore(addA, document.getElementById("skillInput").firstChild);
      document.getElementById('skill').value = "";
    }
}

function expFunction(){
  var exp = document.getElementById('exp').value;
  var addLi = document.createElement("li");
  var e = document.createTextNode(exp);
  if (exp === ""){
    alert("Please enter a description of your previous experience.");
  }
  else{
  addLi.appendChild(e);
  document.getElementById("experience").appendChild(addLi);
  document.getElementById('exp').value = "";
  }
}

/*
function addSkill(skillInput){
  var newSkill = document.createElement('sk');
  newSkill = "sk"+1
document.getElementById('skill').innerHTML = "";
}
function input(){
var skillArray = [sk1,sk2,sk3,sk4,sk5,sk6,sk7,sk8,sk9];
for(var i=0; i < skillArray.length; i++){
  document.getElementById('skillInput').innerHTML = skillArray[i];
  break;
}
}
*/
