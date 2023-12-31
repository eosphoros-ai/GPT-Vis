import MdContainer from 'GPT-Vis/common/MdContainer';
import React, { FC } from 'react';

const Chart: FC<{ content: string }> = ({ content }) => {
  return <MdContainer>{content}</MdContainer>;
};

export default Chart;
