import React, { useState } from 'react';
import { ReactComponent as ArrowBack } from '../../../assets/svgs/arrow_back.svg';
import { ReactComponent as CancelText } from '../../../assets/svgs/Cancel__text.svg';

const DashBoardHeader = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <div className='dashboard-header'>
      <div className='flex items-center mr-4'>
        <ArrowBack />
        <span className='ml-3'> Transactions </span>
      </div>
      <div className=' flex items-center justify-between search-bar-container'>
        <input
          type='text'
          className='hide'
          value={searchValue}
          onChange={(e) => setSearchValue(e.currentTarget.value)}
        />
        {searchValue && (
          <span onClick={() => setSearchValue('')}>
            <CancelText />
          </span>
        )}
      </div>
    </div>
  );
};

export default DashBoardHeader;
