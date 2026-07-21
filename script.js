// typing effect
const phrases = [
  "converts Figma files into shipped React components",
  "integrates REST APIs without breaking the UI",
  "debugs first, guesses never"
];
const el = document.getElementById('typeText');
let pIdx = 0, cIdx = 0, deleting = false;

function tick(){
  const phrase = phrases[pIdx];
  if(!deleting){
    cIdx++;
    el.textContent = phrase.slice(0, cIdx);
    if(cIdx === phrase.length){ deleting = true; setTimeout(tick, 1400); return; }
  } else {
    cIdx--;
    el.textContent = phrase.slice(0, cIdx);
    if(cIdx === 0){ deleting = false; pIdx = (pIdx+1) % phrases.length; }
  }
  setTimeout(tick, deleting ? 28 : 45);
}
setTimeout(tick, 900);

// scroll reveal
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
document.querySelectorAll('.timeline').forEach(el=>io.observe(el));
