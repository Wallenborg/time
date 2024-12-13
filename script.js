
function getRandomColor() {
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.random() * 40 + 60; 
    const lightness = Math.random() * 20 + 40; 
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }
  
  let isFromLeft = true;
  let zIndexCounter = 1; 
  
  function animateBlocks() {
    const currentBlock = document.getElementById('current-block');
    const nextBlock = document.getElementById('next-block');
  
  
    nextBlock.style.backgroundColor = getRandomColor();
    nextBlock.style.transform = isFromLeft ? 'translateX(-100%)' : 'translateX(100%)';
    nextBlock.style.opacity = 0;
  

    zIndexCounter++;
    nextBlock.style.zIndex = zIndexCounter;
  
  
    const randomDuration = Math.random() * 10 + 5; 
    console.log(`Animating from: ${isFromLeft ? 'Left' : 'Right'}, Duration: ${randomDuration}s`);
  

    setTimeout(() => {
      nextBlock.style.transition = `transform ${randomDuration}s linear, opacity ${randomDuration}s linear`;
      nextBlock.style.transform = 'translateX(0)';
      nextBlock.style.opacity = 1;
  
   
      setTimeout(() => {
        currentBlock.style.transition = 'none';
        currentBlock.style.transform = isFromLeft ? 'translateX(-100%)' : 'translateX(100%)';
        currentBlock.style.opacity = 0;
  

        [currentBlock.id, nextBlock.id] = [nextBlock.id, currentBlock.id];
        isFromLeft = !isFromLeft;
  
      
        animateBlocks();
      }, randomDuration * 1000);
    }, 100);
  }
  

  document.getElementById('current-block').style.backgroundColor = getRandomColor();
  document.getElementById('current-block').style.transform = 'translateX(0)';
  document.getElementById('current-block').style.opacity = 1;
  document.getElementById('current-block').style.zIndex = zIndexCounter; 
  

  animateBlocks();
  