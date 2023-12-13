import React, { FC, PropsWithChildren } from 'react';

interface Props {
  title?: string;
}

const CustomComponent: FC<PropsWithChildren<Props>> = ({
  title = '',
  children,
}) => {
  return (
    <div className="bg-white rounded overflow-hidden border border-gray-100 max-w-md">
      <div className="py-2 px-4 bg-green-500 text-white">{title}</div>
      <div className="p-4">{children}</div>
    </div>
  );
};

export default CustomComponent;
