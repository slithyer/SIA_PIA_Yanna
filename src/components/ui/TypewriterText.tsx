import React, { useEffect, useState } from 'react';

type TypewriterTextProps = {
  text: string;
  speed?: number;
  className?: string;
  onComplete?: () => void;
};

const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  speed = 100,
  className = '',
  onComplete,
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      
      return () => clearTimeout(timeout);
    } else if (!isComplete) {
      setIsComplete(true);
      onComplete?.();
    }
  }, [currentIndex, text, speed, onComplete, isComplete]);

  return <span className={className}>{displayText}<span className="animate-pulse">|</span></span>;
};

export default TypewriterText;