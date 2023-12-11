import React, { PropsWithChildren } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import markdownComponents from './markdownComponents';

function MdContainer({ children }: PropsWithChildren) {
  return (
    <div className="relative flex flex-wrap w-full px-2 sm:px-6 py-2 sm:py-6 rounded break-words bg-slate-50 dark:bg-[#232734]">
      <div className="flex-1 overflow-hidden items-center text-md leading-8">
        <ReactMarkdown
          components={markdownComponents}
          rehypePlugins={[rehypeRaw]}
        >
          {String(children)}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default MdContainer;
