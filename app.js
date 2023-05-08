document.addEventListener('DOMContentLoaded', () => {
    const blob = document.getElementById("blob");
    const elements = document.querySelectorAll('.fade-in');

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
