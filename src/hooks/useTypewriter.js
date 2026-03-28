import { useState, useEffect } from "react";

export function useTypewriter(titles) {
  const [typed, setTyped] = useState("");
  const [titleIdx, setTitleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIdx];
    const speed = deleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!deleting && charIdx < current.length) {
        setTyped(current.slice(0, charIdx + 1));
        setCharIdx((c) => c + 1);
      } else if (deleting && charIdx > 0) {
        setTyped(current.slice(0, charIdx - 1));
        setCharIdx((c) => c - 1);
      } else if (!deleting && charIdx === current.length) {
        setTimeout(() => setDeleting(true), 1500);
      } else if (deleting && charIdx === 0) {
        setDeleting(false);
        setTitleIdx((i) => (i + 1) % titles.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIdx, deleting, titleIdx, titles]);

  return typed;
}
