import React, { FC, ReactElement } from 'react';

type Props = {
  title: string;
  children: ReactElement;
};

const Tab: FC<Props> = ({ children }) => {
  return (<div>{children}</div>);
};

export default Tab;
