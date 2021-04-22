import { Fragment } from 'react';

const Sidebar = () => {
  return (
    <Fragment>
      <div className='row sidebarItems'>
        <div className='col-12'>
          <button>Sidebar 1</button>
        </div>
        <div className='col-12'>
          <button>Sidebar 2</button>
        </div>
      </div>
    </Fragment>
  );
};

export default Sidebar;
