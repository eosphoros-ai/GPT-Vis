import { LinkOutlined } from '@ant-design/icons';
import React from 'react';

export type AProps = {
  /**
   * 链接地址
   */
  href: string;
  /**
   *
   */
  children: string;
};

export const A: React.FC<AProps> = ({ href, children }) => {
  console.log(222, children, href);
  return (
    <div className="inline-block text-blue-600 dark:text-blue-400">
      <LinkOutlined className="mr-1" />
      <a href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    </div>
  );
};
