import { useEffect, useRef } from 'react';

export function useCursor() {
  const cursorRef = useRef(null);
  const ringRef   = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring   = ringRef.current;
    if (!cursor || !ring) return;

    let ringX = 0, ringY = 0;

    const onMove = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top  = e.clientY + 'px';
      setTimeout(() => {
        ring.style.left = e.clientX + 'px';
        ring.style.top  = e.clientY + 'px';
      }, 60);
    };

    const onEnter = () => { cursor.classList.add('hover'); ring.classList.add('hover'); };
    const onLeave = () => { cursor.classList.remove('hover'); ring.classList.remove('hover'); };

    document.addEventListener('mousemove', onMove);
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.querySelectorAll('a, button').forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return { cursorRef, ringRef };
}
