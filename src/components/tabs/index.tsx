/**
 * Created with and adapted from https://medium.com/weekly-webtips/create-basic-tabs-component-react-typescript-231a2327f7b6
 * with some input from https://www.digitalocean.com/community/tutorials/react-tabs-component
 */
import React, { FC, ReactElement, useState } from 'react';

import Tab from './Tab';
import Title from './Title';

import './tabs.css';

type Props = {
  children: ReactElement[];
};

const Tabs: FC<Props> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className='tabs'>
      <ul className='controls'>
        {children.map((item, index) => (
          <Title
            key={index}
            title={item.props.title}
            index={index}
            active={index === activeTab}
            setActiveTab={setActiveTab}
          />
        ))}
      </ul>
      <div className='holder'>
        {children[activeTab]}
      </div>
    </div>
  );
};

export { Tab };
export default Tabs;
