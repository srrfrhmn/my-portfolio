import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function IntroTyped() {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [' Hello, I\'m Sarraf. ^500\n` I\'m a software developer and an Honours Economics and Computer Science student at McMaster University.` ^1000\n`My interest in emerging technologies drives me to work on contributing to open-source projects and engaging with developer communities.\n`^1000\n `In addition to my academics, I actively focus on thinking of and building software solutions to real-world issues. When I am not programming, I enjoy reading philosophy, losing in chess, and going to the gym.`'],
      typeSpeed: 100,
      backSpeed: 75,
      backDelay: 100,
      cursorChar: '_',
      shuffle: true,
      smartBackspace: true,
      loop: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
      <span ref={el}></span>
  );
}