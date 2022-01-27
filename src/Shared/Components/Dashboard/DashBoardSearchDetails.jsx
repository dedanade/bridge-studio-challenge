import React from 'react';

const DashBoardSearchDetails = ({ countryOfInterest }) => {
  return (
    <div className='search-details-container'>
      <h5 className='header-bolder border-below'>Country of Interest</h5>
      <p className='text-normal mt-5'>{countryOfInterest}</p>
      <div className='edit-transaction mt-7'>
        <h5 className='header-bolder border-below'> Edit Transactions</h5>
        <p className='text-normal mt-5'>
          Edit the transactions below to match the right information.
        </p>
      </div>
    </div>
  );
};

export default DashBoardSearchDetails;
