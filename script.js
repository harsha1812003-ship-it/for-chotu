const button = document.getElementById("openBtn");

button.addEventListener("click", function () {

document.getElementById("app").innerHTML=`

<div class="container fade">

<h1>Will you be my boyfriend? 🥺❤️</h1>

<p>I already know the answer... 🤭</p>

<button id="yesBtn">YES, ALWAYS ❤️</button>

<button id="noBtn">NOT TODAY 😜</button>

</div>

`;

const yesBtn=document.getElementById("yesBtn");
const noBtn=document.getElementById("noBtn");

const messages=[
"🥺 Please choose YES baby ❤️",
"😏 Wrong button Choto!",
"🤭 Nice try!",
"❤️ Only YES works.",
"🙈 Nope nope!",
"🥹 Come on..."
];

let count=0;

noBtn.addEventListener("mouseover",function(){

const x=Math.random()*(window.innerWidth-180);
const y=Math.random()*(window.innerHeight-100);

noBtn.style.position="absolute";
noBtn.style.left=x+"px";
noBtn.style.top=y+"px";

alert(messages[count % messages.length]);

count++;

});

yesBtn.addEventListener("click",function(){

showStory();

});

});