import React from 'react';
import '../index.css';

function Text() {
  return (
    <div className="flex w-[52.5rem] flex-col gap-[11px]">
      <h1 className="text-[5rem] font-bold leading-[55px] text-white">
        Learn to code by watching others
      </h1>
      <p className="text-[1.6rem] font-medium leading-[26px] text-white">
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.{' '}
      </p>
    </div>
  );
}

export default Text;
