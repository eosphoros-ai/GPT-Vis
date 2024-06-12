import React from 'react';

export type CodeProps = {
  className: string;
  inline: boolean;
  style: CSSStyleDeclaration;
  children: JSX.Element;
};

export const Reference: React.FC<CodeProps> = () => {
  return <div></div>;
};
