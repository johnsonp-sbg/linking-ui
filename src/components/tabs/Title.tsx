import React from 'react';

type Props = {
  active: boolean;
  title: string;
  index: number;
  setActiveTab: (index: number) => void;
};

const TabTitle: React.FC<Props> = ({ active = false, title, index, setActiveTab }) => {
  return (
    <li className={`${active ? 'active' : ''}`} onClick={() => setActiveTab(index)}>
      {title}
    </li>
  );
};

export default TabTitle;
