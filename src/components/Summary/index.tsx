import MdContainer from 'GPT-Vis/common/MdContainer';
import React, { FC } from 'react';

const Summary: FC<{ content: string }> = ({ content }) => {
  return <MdContainer>{content}</MdContainer>;
};

export default Summary;
