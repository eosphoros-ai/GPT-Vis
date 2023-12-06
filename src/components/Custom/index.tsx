import { RobotOutlined } from '@ant-design/icons';
import React, { useEffect, useRef, useState, type FC } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import markdownComponents from '../../common/markdownComponents';

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

  return (
    <div className="relative flex flex-wrap my-6 w-full px-2 sm:px-4 py-2 sm:py-6 rounded break-words bg-slate-50 dark:bg-[#232734]">
      <div className="mr-2 flex flex-shrink-0 items-center justify-center h-7 w-7 rounded-full text-lg sm:mr-4">
        <RobotOutlined />
      </div>
      <div className="flex-1 overflow-hidden items-center text-md leading-8">
        <ReactMarkdown
          components={markdownComponents}
          rehypePlugins={[rehypeRaw]}
        >
          {value}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Custom;
