import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function Typing() {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [' sarrafRahman', ' srrfrhmn', ' srrf'],
      typeSpeed: 50,
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