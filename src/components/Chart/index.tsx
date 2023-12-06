import { RobotOutlined } from '@ant-design/icons';
import React, { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import markdownComponents from '../../common/markdownComponents';

const Chart: FC<{ content: string }> = ({ content }) => {
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
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Chart;
