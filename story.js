function showStory() {
    accessGranted();
}

function accessGranted() {

    document.getElementById("app").innerHTML = `
    <div class="container fade">

        <h1>💖 Access Granted</h1>

        <p>Welcome Back,</p>

        <h2>Choto ❤️</h2>

    </div>
    `;

    setTimeout(chapter1,2500);

}

function chapter1(){

document.getElementById("app").innerHTML=`

<div class="container fade">

<h3>Chapter 1 🥂</h3>

<h1>The Beginning</h1>

<img src="images/firstdate.png" class="memory-img">

<p>

One drink.
<br>
Two strangers.
<br>
Countless memories later...
<br>
Who knew that one evening would become
the beginning of my favourite story? ❤️

</p>

</div>

`;

setTimeout(chapter2,7000);

}

function chapter2(){

document.getElementById("app").innerHTML=`

<div class="container fade">

<h3>🚗 Chapter 2</h3>

<h1>Long Drive</h1>

<img src="images/longdrive.png" class="memory-img">

<p>

Our second date...
<br>
A long drive.
A drink.
A kiss.
Endless conversations.
<br>
Every minute made me fall for you a little more.
❤️

</p>

</div>

`;

setTimeout(chapter3,8000);

}

function chapter3(){

document.getElementById("app").innerHTML=`

<div class="container fade">

<h3>🤍 Chapter 3</h3>

<h1>Just Us</h1>

<img src="images/thirddate.png" class="memory-img">

<p>

We talked more...
<br>
We laughed until our cheeks hurt.
<br>
We slept together.
We woke up together.
We ate together.
<br>
We shared our fears.
Our secrets.
Our dreams.
<br>
And somewhere between all those little moments...
we fell for each other even more.
❤️

</p>

</div>

`;

setTimeout(chapter4,10000);

}
function chapter4(){

document.getElementById("app").innerHTML=`

<div class="container fade">

<h3>📞 Chapter 4</h3>

<h1>Long Distance</h1>

<img src="images/longdistance.png" class="memory-img">

<p>

Then came the hardest chapter...
<br>
Different states.
Different skies.
But the same hearts.
❤️
<br>

2 AM calls...
Many FaceTimes...
Laughing...
Crying...
Sharing every little thing.
<br>
Life gave us problems,
but we never stopped choosing each other.
No matter how far apart we were,
you always felt close.
🤍

</p>

</div>

`;

setTimeout(chapter5,10000);

}
function chapter5(){

document.getElementById("app").innerHTML=`

<div class="container fade">

<h3>☕ Chapter 5</h3>

<h1>The Wait Was Finally Over</h1>

<img src="images/espresso.png" class="memory-img">

<p>

After what felt like forever...
you finally came back.
🥹❤️
<br>
The moment I saw you again,
I forgot how much I had missed you.
<br>
That little auto ride...
The smiles...
The excitement...
Everything felt so special.
🚖✨
<br>

And then...

ESPRESSO. ☕😂
You know it righttttt...

That tiny date somehow became one of my most precious memories.
I wish I could relive that day again and again.
❤️

</p>

</div>

`;

setTimeout(chapter6,11000);

}
function chapter6(){

document.getElementById("app").innerHTML=`

<div class="container fade">

<h3>❤️ Chapter 6</h3>

<h1>The Chapter That Changed Me</h1>

<p>

There was a moment...
when I truly thought
our story would end.
💔
<br><br>

But somehow...
we found our way back to each other.
❤️
<br><br>

You handled my tantrums.
My overthinking.
My mood swings.
My silence.
My stubbornness.
My tears.
And even my chaos.
🥹
<br>

I stayed when it wasn't easy.
I listened.
I understood you.
I chose patience over giving up.
🤍

<br>

That day, I didn't fall out of love...
I fell in love with you even harder.
❤️

<br>

I love us!!...
for choosing us.
Every single time.
🤍
</p>

</div>

`;

setTimeout(chapter7,12000);

}


function chapter7(){

document.getElementById("app").innerHTML=`

<div class="container fade">

<h3>☕ Chapter 7</h3>

<h1>One More date❤️</h1>

<img src="images/photo1.jpeg" class="memory-img">

<p>

A coffee.
smile. Walk. My buk buk
Another memory.
☕❤️

<br><br>

Looking at this picture...
I can still remember
how happy I was just being with you.

<br>
No fancy plans.
No perfect moments.
Just you...
and somehow,
that was enough to make my day perfect.
🥹

<br>
If I had one wish...
I'd choose moments like these
with you,
again and again.
❤️

</p>

</div>

`;

setTimeout(chapter8,10000);

}

function chapter8(){

document.getElementById("app").innerHTML=`

<div class="container fade">

<h3>📸 Chapter 8</h3>

<h1>Our Favourite Memories ❤️</h1>

<div class="photo-gallery">

<img src="images/photo2.jpeg" class="memory-img">

</div>

<p>

The picture tells a story.
Every smile reminds me of a memory.
Every memory reminds me of you.
🥹❤️
No matter where life takes us,
I hope we keep creating moments
that are worth remembering forever.

</p>

</div>

`;

setTimeout(letter,10000);

}

function letter(){

document.getElementById("app").innerHTML=`

<div class="container fade">

<h1>💌 To My Chotu</h1>

<p>
If someone asked me what my favourite memory is...
I honestly wouldn't know which one to choose.
Was it our first drink?
The long drive?
Those two beautiful days together?
Our late-night calls till 3 AM?
That Espresso date?
Or simply every moment I got to spend with you?
❤️

<br>

Every chapter of us has become a memory I'll always carry.
You've made me laugh.
You've seen my overthinking.
You've seen my happiest days.
You've seen my difficult days.
And somehow...
we're still here.
❤️

<br>

Thank you...

for every hug,
every call,
every Kiss,
every smile,
and every little moment
that became something unforgettable.
🥹

<br>

No matter what tomorrow brings...
I hope we never stop creating memories together.
Because my favourite place
has never been a destination...
it's always been wherever you are.
❤️

<br><br>

Love,

<b>Your Harsha ❤️</b>

</p>

<button onclick="lastQuestion()">

One Last Question... ❤️

</button>

</div>

`;

}

function finalPage(){

document.getElementById("app").innerHTML=`

<div class="container fade">

<h2>Updating Relationship...</h2>

<br>

<div class="progress">

<div class="progress-bar" id="progressBar"></div>

</div>

<p id="loadingText">0%</p>

</div>

`;

let progress=0;

const bar=document.getElementById("progressBar");
const text=document.getElementById("loadingText");

const interval=setInterval(function(){

progress++;

bar.style.width=progress+"%";
text.innerHTML=progress+"%";

if(progress>=100){

clearInterval(interval);

setTimeout(showSuccess,700);

}

},35);

}
function showSuccess(){

document.getElementById("app").innerHTML=`

<div class="container fade">

<h1>❤️ SYSTEM UPDATE ❤️</h1>

<h2>Relationship Status</h2>

<br>

<p style="font-size:24px;">

👦 Shreyas ❤️ 👧 Harsha

</p>

<br>

<hr>

<br>

<h2 style="color:#00b894;">

✔ Connected Successfully

</h2>

<br>

<h3>

Loading Forever...

</h3>

<p>

████████████ 100%

</p>

<br>

<h1 style="font-size:50px;">

∞

</h1>

<p>

The End?

<br>

<b>No...</b>

<br>

Just The Beginning ❤️

</p>

<br>

<p style="font-size:14px;color:gray;">

Designed & Developed with ❤️ by Harsha

</p>

</div>

`;

}
function lastQuestion(){

document.getElementById("app").innerHTML=`

<div class="container fade">

<h1>🥺 One Last Question...</h1>

</div>

`;

setTimeout(showProposal,2500);

}

function showProposal(){

document.getElementById("app").innerHTML=`

<div class="container fade">

<h1>Choto... ❤️</h1>

<p>

After everything you've just seen...
After every chapter...
Every laugh...
Every late-night call...
Every thing...
Every memory...
❤️

<br><br>

Will you continue writing
the next chapters
with me?
🥹

</p>

<button id="yesForever">

YES, ALWAYS ❤️

</button>

<button id="noForever">

NOT TODAY 😜

</button>

<p id="cuteMsg"></p>

</div>

`;

const yes=document.getElementById("yesForever");
const no=document.getElementById("noForever");

const msgs=[
"🥺 Wrong button baby!",
"😂 You can't escape me.",
"❤️ I know your answer.",
"🙈 Nice try Shreyas.",
"🥹 Only YES works."
];

let i=0;

no.addEventListener("mouseover",function(){

const x=Math.random()*(window.innerWidth-220);
const y=Math.random()*(window.innerHeight-150);

no.style.position="absolute";
no.style.left=x+"px";
no.style.top=y+"px";

document.getElementById("cuteMsg").innerHTML=msgs[i%msgs.length];

i++;

});

yes.addEventListener("click",function(){

finalPage();

});

}