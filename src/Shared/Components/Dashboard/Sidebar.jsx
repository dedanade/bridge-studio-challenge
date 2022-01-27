import React from 'react';
import { ReactComponent as BeyonicLogo } from '../../../assets/svgs/beyonic_logo.svg';
import { ReactComponent as ArrowDown } from '../../../assets/svgs/arow_down.svg';
import { ReactComponent as Transactions } from '../../../assets/svgs/Transactions.svg';
import { ReactComponent as Balance } from '../../../assets/svgs/Balance.svg';
import { ReactComponent as User } from '../../../assets/svgs/User.svg';

const Sidebar = (props) => {
  return (
    <aside className='sidebar-container w-px{50}'>
      <a href='/' className='sidebar__logo'>
        <BeyonicLogo className='sidebar__logo' />
      </a>
      <ul className='listed-menu'>
        <li>
          <a className='listed-menu__each active' href='/'>
            <div>Icon Dashboard</div>
          </a>
        </li>
        <li>
          <a className='listed-menu__each' href='/'>
            <div className='flex items-center'>
              <Balance /> Balance
            </div>
            <ArrowDown />
          </a>
        </li>
        <li>
          <a className='listed-menu__each' href='/'>
            <div className='flex items-center'>
              <Transactions /> Transactions
            </div>
            <ArrowDown />
          </a>
        </li>
        <li>
          <a className='listed-menu__each' href='/'>
            <div>Icon Organization</div>
          </a>
        </li>
        <li>
          <a className='listed-menu__each' href='/'>
            <div>Icon Groups</div>
          </a>
        </li>
        <li>
          <a className='listed-menu__each' href='/'>
            <div>Icon Zones</div>
          </a>
        </li>
        <li>
          <a className='listed-menu__each' href='/'>
            <div>Icon Setings</div>
          </a>
        </li>
      </ul>
      <div className='user-details px-4 flex items-center mt-auto'>
        <User />
        <div className='user-name-position ml-3'>
          <p>John Kowalski</p>
          <p>Administrator</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
