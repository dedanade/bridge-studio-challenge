import React from 'react';
import { ReactComponent as ArrowDown } from '../../../assets/svgs/arow_down.svg';

function TableHeaderOptions({ onSearchTable }) {
  return (
    <div className='search-table-container'>
      <div className='search-option'>
        <div className='flex items-center mr-2'>
          <span className='mr-2'>Local</span> <ArrowDown />
        </div>
        <div className='line__'></div>
        <div className='search-input'>
          <input
            onChange={(e) => onSearchTable(e.currentTarget.value)}
            type='text'
            className='hide'
            placeholder='Search'
          />
        </div>
      </div>
      <div className='table-other-options flex items-center'>
        <div className='search-option-card filter-card'>
          <p>Filter</p>
        </div>
        <div className='search-option-card export-card'>
          <p>Export as</p>
        </div>

        <div className='date-range'>
          <span> Start date - End date </span>
        </div>
      </div>
    </div>
  );
}

export default TableHeaderOptions;
