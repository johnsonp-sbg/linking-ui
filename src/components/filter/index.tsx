import React, { FC } from 'react';

import './filter.css';

type Filter = {
  label: string;
  handler: (value: string) => void;
  value: string;
};

type Props = {
  filters: Filter[];
};

const Filters: FC<Props> = ({ filters = [] }) => {
  return (<div id='filters'>
    <h3>Filters</h3>
    <div>
      {filters.map((filter, index) => {
        const key = filter.label.replace(' ', '');
        return (<div className='filter' key={index}>
          <label htmlFor={filter.label}>{filter.label}</label>
          <input type='text' id={key} name={key} value={filter.value} onChange={(e) => filter.handler(e.target.value)} />
        </div>);
      })}
    </div>
  </div>)
};

export default Filters;