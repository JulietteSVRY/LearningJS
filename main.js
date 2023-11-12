//document.write("Привет");
//console.error("Ошибка");
//var num = 5;
//console.log(num);
//var str = "word";
//switch(str) {
  //  case "word":
    //    console.log("Ура!");
      //  break;
//}
//alert("Привет!");
//var count = 0;
//function OnClickButton(el) {
   // count++;
    //el.innerHTML = "Ты нажал на кнопку: " + count;
   // el.style.background = "red";
   // el.style.color ="white";
   // el.style.cssText ="border-radius:5px; border:0; font-size: 20px";
//}
//OnClickButton();
//function OnInput(el) {
 //   console.log(el.value);
//}
//function CheckForm(el) {
  //  return false; //чтобы страница не перезагружалась и инфа в консоле созранялась
//}

//var date = new Date();
//console.log(date.getFullYear());

function myFunction(){
    var x = document.getElementById('myDiv');
    if ( x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}