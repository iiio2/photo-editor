import { Fragment } from 'react';

const Sidebar = ({ name, handleClick, active }) => {
  return (
    <Fragment>
      <div className='row sidebarItems'>
        <div
          className={`col-12 ${active ? 'active-class' : ''} `}
          onClick={handleClick}
          style={{ cursor: 'pointer' }}
        >
          <h6>{name}</h6>
        </div>
      </div>
    </Fragment>
  );
};

export default Sidebar;
