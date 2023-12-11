import MdContainer from 'GPT-Vis/common/MdContainer';
import React, { useEffect, useRef, useState, type FC } from 'react';

const Custom: FC<{ content: string }> = ({ content }) => {
  const [value, setValue] = useState('');
  const index = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (index.current > content.length) {
        clearInterval(timer);
        return;
      }
      setValue(content.substring(0, index.current));
      index.current += 1;
    }, 30);
    return () => {
      clearInterval(timer);
    };
  }, [content, value]);

  return <MdContainer>{content}</MdContainer>;
};

export default Custom;
