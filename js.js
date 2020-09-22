// test js
document.write("<p>this is test from external file jsjs</p>");
document.getElementById("div1").innerHTML = ("hey el mhaydi this is div");
//var
var MonPrix;
MonPrix = 500;
document.getElementById("prix").innerHTML = MonPrix;

var prixInitial;


hasDiscount=true;
if(hasDiscount === true)
{
    var prixInitial = 1000;  
}
else
{
    var prixInitial = 200;
}
var div=document.getElementById("test") // variable div=document.getElementById("test")//
div.innerHTML = prixInitial;
/*
array: ["facebook","twitter","instagram"]
object: {fb:"facebook", tt:"twitter", is:"instagram"}
string:"javascript"
number: 30;
*/
var prenom,
    nom;
prenom="mehdi"
nom="el lamrani"
var fullName;
fullName= nom+prenom;

var age=28;
var country="morocco"
document.write(
"my name is: " + fullName+ " "+
 "and my age is: "+ age + " " 
 +"i'm from: " +country);

 var ticket=1500;

 if (ticket < 1500)
 {
 
    console.log("no its expensive");
 }
 else if    (ticket > 1500)
 {

    console.log("yeah its cheap")
 }
 else 
 (ticket == 1500)
 {
     console.log("yes it's good");
 }

 //******************************************************************************************************* */

 var UrAge = prompt("what's your age?");
    

 if (UrAge  < 18)
 {
     alert("your age is "+ UrAge + "so you are not allowed only +18" )
 }
 else 
 {
    alert("your age is "+ UrAge + "Uwelcome" )
 }


 function hello()
 {
 
    var yourName="tarik"
    if 
    (yourName==="mehdi") {
      alert("hello"+" "+ yourName + " " + "how are you?");
                       }
 else
    {
    alert("sorry" + " " + yourName +" "+"is not mehdi");
    }
 
}
//function return//
function nameAge()
{
    var name="elmehdi",
        age=29;
    var nameAndAge = name + age;
        return nameAndAge;
}
var nm = nameAge()
document.getElementById("nameAge").innerHTML = ("your name and age : " + nm);
 
//--------------------------------------------------------------------------------------------------//
function name(fName, lastName,age)


{
    var agedays= age * 365;

    return " your firstname is " + fName +" "+"and your lastname is" +
     " "+ lastName + "and your age per days"+ agedays;
}

document.getElementById("flname").innerHTML= name("el mehdi" , "el lamrani", 20);


//--------------------------------------------------------------------------------------------------//
function calculeAge(urage)
{
    var year=365;
    return urage*year;
}


var dynamicAge = prompt ("put ur age here to calculate per days")
document.getElementById("calcage").innerHTML= calculeAge(dynamicAge);
//--------------------------------------------------------------------------------------------------//
//**self invoke**//

(function convertirDhToDollar()
{
    
    var pricedollar= document.getElementById("convert").innerHTML; // =200
    alert  ("Your price on dollar: "+pricedollar*9.4);
}) ();


function convertoeuro()
{
    var priceeuro=document.getElementById("dirham").value,
    result =priceeuro * 10,
    finalresult=document.getElementById("messageeuro");
    finalresult.innerHTML=("your price on dirham "+ priceeuro +  " is " +result+ " in euro");

    if (priceeuro===""){
        finalresult.innerHTML=("this field can't be empty")
    }
    else if (isNaN(priceeuro)) //  must be a number
    {
        finalresult.innerHTML=("this field accept numbers only")
    }
    else if (priceeuro === "0")
    {
        finalresult.innerHTML=("this value cant be 0")
    }
    else if (priceeuro<0)
    {
        finalresult.innerHTML=("the value must be a positive number")
    }
    else
    {
        finalresult.innerHTML=("your price on dirham "+ priceeuro +  " is " +result+ " euro");
    }
}


//---------------------------------------------------------------------------------------------------------//
var  pays= prompt("what is ur favourite countrie?");
switch (pays) 
{
    case "morocco":
    alert("morocco is the best")
    break;

    case "algeria":
    alert("algeria is amazing")
    break;

    case "portugal":
    alert("portugal is good")
    break;

    default:
        alert("you must enter a countrie")


}
//-------------------------------------------------------------------------------------------------------------//
window.onclick = function()
{
    document.getElementById("event").innerHTML="this is your message";
}
//--------------------------------------------------------------------------------------------------------------//
function changing ()
{
    document.getElementById("event1").innerHTML="this text message was changed by double click on the button";
}
//---------------------------------------------------------------------------------------------------//

var inPuttext = document.getElementById("textarea");
var myDiv = document.getElementById("diiiiv");

inPuttext.onkeyup = function() //onkeydown / onkeypress
     {
      myDiv.innerHTML =("your result is " +inPuttext.value * 10);
     }
     
//------------------------------------------------------------------------------------------------//

var hoover=document.getElementById("hoverme");

hoover.onmouseout = function()
{
hoover.innerHTML=("hover is gone");
}

//-----------------------------------------------------------------------------------------------//
var teext = document.getElementById("text1"),
      thisdiv = document.getElementById("div2"),
      selectTR=document.getElementById("tr");
      selectTR.onchange = function ()
    {
        thisdiv.innerHTML = teext.value * selectTR.value;
    }
//------------------------------------------------------------------------------------------//


//declaration array : 
var friends =["mehdi", // 0 index
              "siham", // 1 index
              "marwane",
              "zakaria"];

console.log(friends);
console.log(friends[3]);  // =zakaria

if (Array.isArray(friends))
{
console.log("good its array");
}
else
{
    console.log("its not a array");
}
console.log(friends.length); // =4

friends=friends.toString(); //convert to string
//friends=friends.toLocaleString(); 
console.log(friends);


var friends =["mehdi", // 0 index
              "siham", // 1 index
              "marwane",
              "zakaria"];


friends = friends.join('and'); //convert to string
console.log(friends);

var friends4 =["mouad",
              "siham", 
              "habiba",
              "hajar"];


friends4.length=2; // we use just 2 items 
console.log(friends4);

//------------------------------------------------------------------------------------------

//add index
var amigos =["mehdi", // 0 index
              "siham", // 1 index
              "marwane",
              "maya",
              "maria",
              "zakaria"];
console.log(amigos);

console.log(amigos.length);
console.log(amigos);

//add item

amigos[amigos.length]="dounia";
//add another item
amigos[amigos.length]="sarah";
console.log(amigos);

// add item by push (in the last)

amigos.push("samira");
console.log(amigos);

// add item by unshift (add item in the first line)

amigos.unshift("salma","noufissa"); //salma =index 0 / noufissa =item 1 / WE CAN ADD MORE THEN 1 item
console.log(amigos);


// add item where ever you want

amigos.splice(5, 3, "3AJIL"); //after 5 item delete 3 item and add '3AJIL' Or we can juste add item amigos.splice(5, 0, "3AJIL");
console.log(amigos);
console.log(amigos.length);

//delete last item (pop)
amigos.pop();
console.log(amigos); //samira was deleted

var lastitem =amigos.pop(); //sarah was deleted from array 
console.log(lastitem);

//delete first item (shift)
amigos.shift();
console.log(amigos); //salma deleted

amigos.reverse(); // de Z a A
console.log(amigos);

amigos.sort(); //de A a Z 
console.log(amigos);

var mysliceamigos= amigos.slice(2); //delete or select  specific items from array
console.log(mysliceamigos);


// combine arrays concat //
var amigos1 =["mourad",
               "jamal",
               "karam",
               "reda"
            ]
 var amigos2=["frank",
              "mark",
              "jhon",
              "betty"
             ]


var todosamigos= amigos1.concat(amigos2);
console.log(todosamigos);

todosamigos.sort();
console.log(todosamigos);
//-----------------------------------------------------------------------------------------------------
// indexOf("value of search", starting from index(optional));
var OneAmigo=amigos2.indexOf("betty") //index 2  //we can une lastIndexOf : searching from the last item

console.log(OneAmigo);
console.log(amigos2[OneAmigo]); // = console.log(amigos2[2]);

document.getElementById("amigos2").innerHTML=("my friends from amigos2 are: "+amigos2);
document.getElementById("specialamigo").innerHTML=("my special friend from amigos2 is: "+amigos2[OneAmigo]);

  //----------------------------------------------------------------------------------------------------
  //convert number variable to string

  var myNumber = 100;
  console.log((myNumber));
  console.log(typeof(myNumber));
  var myNumber= myNumber.toString();
  console.log(myNumber);
  console.log(typeof(myNumber));

  //locale a string

  var Str ="open the door";
  var loc =Str.indexOf("door");
  console.log(loc);

  // search string

  var sear = Str.search("the");
  console.log(sear);

  // split: split(separator , limit)

  var texxt =("hello from the other side"),
      tosplit = texxt.split();

  console.log(tosplit);
  console.log(typeof(tosplit)); 
    
  //(separator , limit)
     tosplit = texxt.split(" ", 3);
     console.log(tosplit); // affiche (1- hello 2-from 3-the)

// slice:  slice(start, end) will just take a PART or SLICE from the string value
// we can us (substring):  substring(start, end) its the same result
var text2= ("hello from africa")
    toslice= text2.slice(11,17); //will show just (africa) slice from index 11 to index 17

    console.log (toslice);

    toslice= text2.slice(0,5);  // will show (hello)

    console.log (toslice);

    // substr:  substr(start, lenght)

    var text3=("hello its me"),
        tosubstr= text3.substr(6,3) //start from index 5 and show us 3 index so after hello - =its is the result

        console.log(tosubstr);

//charAt(index)= select character
var text4=("hello its mehdi"),
    tocharAt=text4.charAt(4,10);

    console.log(text4);
    console.log(tocharAt); // result = o
// select the last character

theLast=text4.charAt(text4.length-1);
console.log(theLast); // result= i

// replace: replace("value", "new value")


var text5=("use google for ur search"),
   toReplace=text5.replace('google','yahoo');

   console.log(text5);
   console.log(toReplace);

   //concatenating

   var message1= ("hello mehdi"),
       message2= ("im fine & u?"),
       allMessage=message1.concat("  how are you? ", message2 , " im good, thanks");

       console.log(allMessage);

    // convert letters to MIN
var maj=("HI EL MEHDI"),
    mini=maj.toLowerCase(maj);

console.log(maj);
console.log(mini);

var MAJ2=("HI SIHAM".toLowerCase());
console.log(MAJ2);

// convert to MAJ
var MIN1=("hi el mhaydi".toUpperCase());
console.log(MIN1);

//trim = annule les espace au debut et a la fin

var text6="     my name is siham     "
    textTrim=text6.trim(); // annule les espace & affiche le mme message

    console.log(text6);
    console.log(textTrim);

//link = add <a href=link>

var text6="google";

console.log("click here to go to google " + text6.link("http://www.google.com"));

//exercice

var numb0=135;
console.log("this is number"+ numb0);

var numb1=numb0.toString();
console.log("this is string"+ numb1);


var numb3=numb1.replace(3,9);
console.log("number 3 replaced by number9 = " + numb3);

var numb4= numb3.split("");
console.log(numb4);


// chain methode to replace the exercice - use different methode in the same line like a chain

var lNumber= 120;

var lastNumber= lNumber.toString().replace(1,5).split("");
console.log(lastNumber);

//loop
 

var i;

for (i=1 ; i<=10; i++)
{

    console.log("loop de 1 a 10", (i));
}
//loop +2
var x;

for (x=1 ; x<=15; x= x+2)
{

    console.log("loop de 1 a 15 by+2", (x));
}

// loop affiche contenue array

var F;
var MyFriendsF= ["mehdi", "siham", "marwa", "hajar"];

for (F=0 ; F < MyFriendsF.length ; F++)
{
    console.log(MyFriendsF[F]);
}

// FOR IN LOOP

var myAccountFB={login:"mehdi",psw:"ellamranifacebook"};
var myAccountIn={instlo:"ellamehdi",passint:"ellamehdiinstagram"}
for(var prop in myAccountFB)
{
    console.log("my account fb : "+ prop +":" + myAccountFB[prop]);
}
for (prop1 in myAccountIn)
{
    console.log("my account inst: "+prop1+":"+" "+ myAccountIn[prop1]);
}