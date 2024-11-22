import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';

interface AnimatedTextProps {
  children: string;
  className?: string;
  delay?: number;
}

const AnimatedText = ({ children, className = '', delay = 0 }: AnimatedTextProps) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const text = textRef.current;
    if (!text) return;

    const split = new SplitType(text, { types: ['chars', 'words'] });
    
    gsap.from(split.chars, {
      opacity: 0,
      y: 50,
      rotateX: -90,
      stagger: 0.02,
      delay,
      duration: 0.7,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: text,
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse'
      }
    });

    return () => {
      split.revert();
    };
  }, [delay]);

  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  );
};

export default AnimatedText;