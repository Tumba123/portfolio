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

  let timeoutID; // Declare a variable to store the timeout ID
  let isHovering = false; // Flag to track hover state
  
  // Function to reset the delay timer
  function resetDelayTimer() {
    clearTimeout(timeoutID); // Clear any existing timeout
    timeoutID = setTimeout(() => {
      // Reset styles after 5 seconds
      projectsBtn.style.marginLeft = '-75px';
      aboutBtn.style.marginLeft = '-65px';
      latestBtn.querySelector('.main-btn').style.backgroundColor = 'rgba(100, 100, 100, 0.25)';
      latestBtn.querySelector('.main-btn').style.color = 'white';
      projectsBtn.querySelector('.main-btn').style.backgroundColor = 'rgba(100, 100, 100, 0.25)';
      projectsBtn.querySelector('.main-btn').style.color = 'transparent';
      aboutBtn.querySelector('.main-btn').style.backgroundColor = 'rgba(100, 100, 100, 0.25)';
      aboutBtn.querySelector('.main-btn').style.color = 'transparent';
    }, 5000);
  }
  
  // Add event listeners to your elements
  elements.forEach((element) => {
    element.addEventListener('mouseenter', () => {
      // Set the flag to true and reset the delay timer
      isHovering = true;
      resetDelayTimer();
    });
  
    element.addEventListener('mouseleave', () => {
      // Set the flag to false when leaving an element
      isHovering = false;
    });
  });
  
  latestBtn.addEventListener('mouseenter', () => {
    // Shift elements to the right and change background colors on mouse enter
    projectsBtn.style.marginLeft = '0';
    aboutBtn.style.marginLeft = '0';
    latestBtn.querySelector('.main-btn').style.backgroundColor = 'white';
    latestBtn.querySelector('.main-btn').style.color = 'black';
    projectsBtn.querySelector('.main-btn').style.backgroundColor = 'white';
    projectsBtn.querySelector('.main-btn').style.color = 'black';
    aboutBtn.querySelector('.main-btn').style.backgroundColor = 'white';
    aboutBtn.querySelector('.main-btn').style.color = 'black';
  
    // Reset the delay timer on mouse enter
    resetDelayTimer();
  });
  
  latestBtn.addEventListener('mouseleave', () => {
    // Reset the delay timer on mouse leave
    resetDelayTimer();
  });
  
  // Check for hovering on any of the elements
  function checkHover() {
    if (isHovering) {
      resetDelayTimer();
    }
  }
  
  // Call checkHover periodically to keep checking if the mouse is hovering over any element
  setInterval(checkHover, 1000); // You can adjust the interval as needed
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
