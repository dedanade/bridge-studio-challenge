import React, { useEffect, useState } from 'react';
import DashBoardHeader from '../Shared/Components/Dashboard/DashBoardHeader';
import DashBoardSearchDetails from '../Shared/Components/Dashboard/DashBoardSearchDetails';
import Sidebar from '../Shared/Components/Dashboard/Sidebar';
import { TableView } from '../Shared/Components/Table/TableView';
import { ReactComponent as CheckBox } from '../assets/svgs/checkbox.svg';

const columns = [
  {
    Header: <CheckBox />,
    accessor: 'check',
  },
  {
    Header: 'Value Date',
    accessor: 'valueDate',
  },
  {
    Header: 'Transacion Id',
    accessor: 'transactionId',
  },
  {
    Header: 'Movement Type',
    accessor: 'movementType',
  },
  {
    Header: 'Amount',
    accessor: 'amount',
  },
  {
    Header: 'Status',
    accessor: 'statusText',
  },
  {
    Header: 'Action',
    accessor: 'action',
  },
];
const serverData = [
  {
    date: '2022-01-14',
    transactionId: '1480636587',
    movementType: 'Money Transfer',
    amount: '1,500.000 UGX',
    status: 'active',
  },
  {
    date: '2022-01-14',
    transactionId: '1480636588',
    movementType: 'Airtime',
    amount: '1,500.000 UGX',
    status: 'error',
  },
  {
    date: '2022-01-14',
    transactionId: '1480636590',
    movementType: 'Collection',
    amount: '1,500.000 UGX',
    status: 'hold',
  },
];

function CheckStatus(status) {
  switch (status) {
    case 'error':
      return <p className='error'> Error</p>;
    case 'hold':
      return <p className='hold'> Hold</p>;
    default:
      return <p className='active'> Success</p>;
  }
}
const Dashboard = () => {
  const [tableData, setTableData] = useState();
  const [data, setData] = useState(serverData);
  useEffect(() => {
    const tableData = data.map((s) => {
      return {
        check: <CheckBox />,
        valueDate: s.date,
        transactionId: s.transactionId,
        movementType: s.movementType,
        amount: s.amount,
        statusText: <CheckStatus status={s.status} />,
        action: 'action',
      };
    });
    setTableData(tableData);
  }, [data]);

  if (!tableData) return <p>Loading...</p>;
  const handleSearchTable = (value) => {
    if (value) {
      const lowerValue = value.toLowerCase();
      const filteredResult = serverData.filter((s) => {
        return (
          s.amount.toLowerCase().includes(lowerValue) ||
          s.transactionId.toLowerCase().includes(lowerValue) ||
          s.movementType.toLowerCase().includes(lowerValue)
        );
      });
      if (filteredResult.length) setData(filteredResult);
      else setData(serverData);
    } else {
      setData(serverData);
    }
  };
  return (
    <div className='dashboard-layout w-full flex'>
      <Sidebar />
      <section className='dashboard-view'>
        <DashBoardHeader />
        <div className='dashboard-view__table'>
          <div className='table-search-details'>
            <DashBoardSearchDetails countryOfInterest={'Kenya'} />
          </div>
          <div className='dashboard-table mt-6'>
            <TableView
              columns={columns}
              data={tableData}
              onSearchTable={handleSearchTable}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
