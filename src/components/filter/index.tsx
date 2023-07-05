import React, { type ReactElement, type FC } from 'react';

import './filter.css';

interface FilterProps {
  label: string
  handler: (value: string) => void
  value: string
}

interface Props {
  filters: FilterProps[]
  id?: string
  title?: string
}

const Filters: FC<Props> = ({ filters = [], id, title }): ReactElement => {
  return (<div id={id} className='filters-wrapper'>
    {title !== null ? (<h3>{title}</h3>) : ''}
    <div className='filters-container'>
      {filters.map((filter, index) => {
        return (<Filter {...filter} key={index} />);
      })}
    </div>
  </div>);
};

export const Filter: FC<FilterProps> = ({ label, handler, value }) => {
  const key = label.replace(' ', '');
  return (<div className='filter'>
    <label htmlFor={label}>{label}</label>
    <input type='text' id={key} name={key} value={value} onChange={(e) => { handler(e.target.value); }} />
  </div>);
};

export default Filters;
