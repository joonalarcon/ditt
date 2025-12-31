import React, { useState, useEffect } from "react";

/**
 * @param {Object} props
 * @param {string[]} [props.words]
 * @param {number} [props.typingSpeed]
 * @param {number} [props.deletingSpeed]
 * @param {number} [props.pauseTime]
 * @param {string} [props.className]
 */
export default function TypewriterEffect({
  words = [],
  typingSpeed = 150,
  deletingSpeed = 100,
  pauseTime = 2000,
  className = "",
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleType = () => {
      const fullWord = words[currentWordIndex];

      if (isDeleting) {
        setCurrentText((prev) => prev.substring(0, prev.length - 1));
      } else {
        setCurrentText((prev) => fullWord.substring(0, prev.length + 1));
      }

      if (!isDeleting && currentText === fullWord) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(
      handleType,
      isDeleting ? deletingSpeed : typingSpeed,
    );

    return () => clearTimeout(timer);
  }, [
    currentText,
    isDeleting,
    words,
    currentWordIndex,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span>{currentText || "\u200B"}</span>
      <span className="ml-1 w-[3px] h-[1em] bg-blue-500 animate-blink"></span>
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </span>
  );
}
