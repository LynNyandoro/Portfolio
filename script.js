const menuButton=document.getElementById("menuButton");
const navLinks=document.getElementById("navLinks");
menuButton.addEventListener("click",()=>{const open=navLinks.classList.toggle("open");menuButton.setAttribute("aria-expanded",String(open));});
document.querySelectorAll(".nav-links a").forEach(link=>link.addEventListener("click",()=>{navLinks.classList.remove("open");menuButton.setAttribute("aria-expanded","false");}));
document.getElementById("year").textContent=new Date().getFullYear();
document.getElementById("contactForm").addEventListener("submit",event=>{event.preventDefault();const name=document.getElementById("name").value.trim();document.getElementById("formMessage").textContent=`Thanks, ${name}! The form interaction is working successfully.`;event.target.reset();});