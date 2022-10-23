function tree(){
    var text = document.getElementById("puno1");
 
var symbols,color;
symbols = "0123456789ABCDEF";
color = "#";

for (var i= 0; i < 6 ; i++ ){
color = color + symbols [Math.floor(Math.random() * 16)];
}
text.style.color = color;

document.getElementById("hex").innerHTML = color;

}


function Go(){
    Go_color = setInterval(tree,100);

}

function hinto(){
    clearInterval(Go_color);
}




// //christmas tree

// let rows = 10;
// let columns = 10;

// for (let i = 1; i < rows; i++) {
   
//   for(j = 1; j<=i; j++) {
//  document.write("*");
//   }

//  document.write("<br>");

//  for(j = 1; j<=i; j++) {
//     document.write("^");
//      }
   
// };
// document.write("<br>")