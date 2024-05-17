import React, {useEffect} from 'react'
import './hero.css'

const Hero = () => {
    useEffect(() => {
        // Typewriter animation effect script
        const typewriter = document.getElementById('typewriter');
        const words = ["Critique Corner!"];
        let charIndex = 0;
        let wordIndex = 0;
        let isDeleting = false;
    
        const type = () => {
          const currentWord = words[wordIndex % words.length];
          const fullText = isDeleting ? currentWord.substring(0, charIndex - 1) : currentWord.substring(0, charIndex + 1);
          typewriter.innerHTML = fullText;
          charIndex = isDeleting ? charIndex - 1 : charIndex + 1;
    
          if (!isDeleting && fullText === currentWord) {
            isDeleting = true;
            setTimeout(type, 1500);
          } else if (isDeleting && fullText === '') {
            isDeleting = false;
            wordIndex++;
            setTimeout(type, 500);
          } else {
            setTimeout(type, isDeleting ? 100 : 200);
          }
        };
    
        type();
    
        // Cleanup function
        return () => {
          clearTimeout();
        };
      }, []);
  return (
    <div className='hero'>
        <div className='hero-text'>
            <h1>Welcome to<br /><span id="typewriter">Critique Corner!</span></h1>
            <p>A platform for sharing and receiving valuable feedback on products and services.</p>
        </div>      
    </div>
  )
}

export default Hero
