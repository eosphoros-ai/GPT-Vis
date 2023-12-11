import MdContainer from 'GPT-Vis/common/MdContainer';
import React, { FC } from 'react';

const Reference: FC<{ content: string }> = ({ content }) => {
  return <MdContainer>{content}</MdContainer>;
};

export default Reference;
