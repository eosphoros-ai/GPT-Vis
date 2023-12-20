import MdContainer from 'GPT-Vis/common/MdContainer';
import React, { type FC } from 'react';

const Basic: FC<{ content: string }> = ({ content }) => {
  return <MdContainer>{content}</MdContainer>;
};

export default Basic;
