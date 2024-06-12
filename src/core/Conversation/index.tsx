import React from 'react';
import Markdown, { Options } from 'react-markdown';
import rehypeRaw from 'rehype-raw';

export type ConversationProps = {
  /**
   * 需要被渲染的 markdown 字符串
   */
  children: string;
  /**
   * 注册的组件
   */
  components?: Options['components'];
  /**
   * 注册的 rehype 插件
   */
  // rehypePlugins: Options['rehypePlugins'];
};

export const Conversation: React.FC<ConversationProps> = ({
  children,
  components,
}) => {
  console.log('components', components, children);
  return (
    <Markdown components={components} rehypePlugins={[rehypeRaw]}>
      {children}
    </Markdown>
  );
};
