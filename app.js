document.addEventListener('DOMContentLoaded', () => {
  const blob = document.getElementById("blob");
  const elements = document.querySelectorAll('.fade-in');
  const latestBtn = document.getElementById('latest-cv');
  const projectsBtn = document.getElementById('projects');
  const aboutBtn = document.getElementById('about');

  // Check if the user is accessing the website from a phone or a tablet
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// Redirect to the mobile version if accessing from a phone or tablet
if (isMobile) {
  window.location.href = "https://m.sergejkulpinac.dev";
}


  document.body.onpointermove = event => {
    const { clientX, clientY } = event;

    blob.animate(
      [
        { left: `${blob.style.left}`, top: `${blob.style.top}` },
        { left: `${clientX}px`, top: `${clientY}px` }
      ],
      { duration: 3000, fill: "forwards" }
    );
  };

  elements.forEach((element) => {
    element.classList.add('fade-in');
  });

  latestBtn.addEventListener('mouseenter', () => {
    projectsBtn.style.marginLeft = '0';
    aboutBtn.style.marginLeft = '0';
    latestBtn.querySelector('.main-btn').style.backgroundColor = 'white';
    latestBtn.querySelector('.main-btn').style.color = 'black';
    projectsBtn.querySelector('.main-btn').style.backgroundColor = 'white';
    projectsBtn.querySelector('.main-btn').style.color = 'black';
    aboutBtn.querySelector('.main-btn').style.backgroundColor = 'white';
    aboutBtn.querySelector('.main-btn').style.color = 'black';
  });

  latestBtn.addEventListener('mouseleave', () => {
    setTimeout(() => {
      projectsBtn.style.marginLeft = '-75px';
      aboutBtn.style.marginLeft = '-65px';
      latestBtn.querySelector('.main-btn').style.backgroundColor = 'rgba(100, 100, 100, 0.25)';
      latestBtn.querySelector('.main-btn').style.color = 'white';
      projectsBtn.querySelector('.main-btn').style.backgroundColor = 'rgba(100, 100, 100, 0.25)';
      projectsBtn.querySelector('.main-btn').style.color = 'transparent';
      aboutBtn.querySelector('.main-btn').style.backgroundColor = 'rgba(100, 100, 100, 0.25)';
      aboutBtn.querySelector('.main-btn').style.color = 'transparent';
    }, 5000);
  });
});



const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const enhance = id => {
const element = document.getElementById(id),
      text = element.innerText.split("");

element.innerText = "";

text.forEach((value, index) => {
  const outer = document.createElement("span");
  
  outer.className = "outer";
  
  const inner = document.createElement("span");
  
  inner.className = "inner";
  
  inner.style.animationDelay = `${rand(-5000, 0)}ms`;
  
  const letter = document.createElement("span");
  
  letter.className = "letter";
  
  letter.innerText = value;
  
  letter.style.animationDelay = `${index * 1000 }ms`;
  
  inner.appendChild(letter);    
  
  outer.appendChild(inner);    
  
  element.appendChild(outer);
});
}

enhance("channel-link");
