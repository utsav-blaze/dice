var x=(Math.floor((Math.random()*6)+1));
console.log(x);
var y=(Math.floor((Math.random()*6)+1));
console.log(y);
document.querySelector("img.img1").src="images/dice"+x+".png";
document.querySelector("img.img2").src="images/dice"+y+".png";
function winner(){
  if(x>y)
  document.querySelector("h3").textContent="Player 1 is Winner.Chicken dinner";
  else if(y>x)
  document.querySelector("h3").textContent="Player 2 is Winner. Chicken dinner";
  else
  document.querySelector("h3").textContent="Player 1 is tied with Player 2. No chicken dinner";
}
winner();
