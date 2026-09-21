const screens=[...document.querySelectorAll('.screen')];
const show=id=>{screens.forEach(s=>s.classList.toggle('active',s.id===id));window.scrollTo({top:0,behavior:'smooth'});};
const questions=[
 ['What is your favorite thing about us?','Choose what your heart says 💕',['Our little conversations 💬','The way we make each other smile 😊','Everything about us ❤️']],
 ['If we could travel anywhere together, where would we go?','A tiny dream for two ✈️',['A beach with sunsets 🌅','A cozy city adventure 🏙️','Anywhere, as long as we are together 🥹']],
 ['What should we never stop doing?','The little things matter most 🌷',['Laughing together 😂','Supporting each other 🤝','Choosing each other every day 💞']],
 ['How do you feel when you see my name?','Be honest, my love 🙈',['I smile instantly 😊','My heart gets butterflies 🦋','I cannot explain it ❤️']],
 ['What kind of memories should we make?','Let’s imagine our future ✨',['Silly and spontaneous ones','Peaceful and meaningful ones','A lifetime full of everything']],
 ['What is one promise we should keep?','A promise from the heart 💍',['Always communicate','Always respect each other','Never stop showing love']],
 ['When life gets difficult, what should we remember?','Us against the problem 🤍',['We can talk it out','We are a team','Love and patience matter']],
 ['What would you choose for a perfect evening?','Just picture it 🌙',['A long walk together','A movie and cuddles','Talking until we fall asleep']],
 ['If I asked you to choose us again…','One more little question 💗',['I would choose us','Of course, every time','You already know my answer']],
 ['Are you ready for my final message?','The biggest answer is waiting ❤️',['YES! Show me!','My heart is ready 💕','Let’s see the surprise ✨']]
];
let current=0;
const $=id=>document.getElementById(id);
function renderQuestion(){const q=questions[current];$('questionCount').textContent=`Question ${current+1} of 10`;$('progressText').textContent=`${(current+1)*10}%`;$('progressBar').style.width=`${(current+1)*10}%`;$('questionTitle').textContent=q[0];$('questionSub').textContent=q[1];$('questionEmoji').textContent=['💗','✈️','🌷','🦋','✨','💍','🤍','🌙','💞','🎁'][current];$('answers').innerHTML='';q[2].forEach(text=>{const b=document.createElement('button');b.className='answer';b.textContent=text;b.onclick=()=>{if(current<9){current++;renderQuestion()}else{show('final');burst()}};$('answers').appendChild(b)})}

document.querySelectorAll('[data-next]').forEach(b=>b.onclick=()=>show(b.dataset.next));
$('yesStart').onclick=()=>{current=0;renderQuestion();show('quiz');};
let maybe=0;$('maybeBtn').onclick=()=>{maybe++;$('playfulHint').textContent=['Take your time… but my heart is waiting 🥺','I promise I have snacks while you think 🍫','Okay okay… one more little smile? 😌','I will ask again with extra hearts ❤️'][Math.min(maybe-1,3)];if(maybe>=4){$('maybeBtn').textContent='Okay… YES ❤️';$('maybeBtn').onclick=()=>{$('yesStart').click()}}};
$('replay').onclick=()=>{current=0;show('welcome')};
function burst(){for(let i=0;i<28;i++){const h=document.createElement('div');h.className='floating-heart';h.textContent=['♥','❤','💕','✨'][Math.floor(Math.random()*4)];h.style.left=Math.random()*100+'vw';h.style.fontSize=12+Math.random()*28+'px';h.style.animationDuration=2+Math.random()*3+'s';$('hearts').appendChild(h);setTimeout(()=>h.remove(),5500)}}
setInterval(()=>{const h=document.createElement('div');h.className='floating-heart';h.textContent='♥';h.style.left=Math.random()*100+'vw';h.style.fontSize=10+Math.random()*18+'px';h.style.animationDuration=5+Math.random()*6+'s';$('hearts').appendChild(h);setTimeout(()=>h.remove(),12000)},650);
