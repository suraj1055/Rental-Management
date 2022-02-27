import React, { useState, Fragment } from 'react'
import { AlignLeft } from 'react-feather';

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  const openCloseSidebar = () => {
    if (sidebar) {
      setSidebar(!sidebar)
      document.querySelector(".page-main-header").classList.remove('open');
      document.querySelector(".page-sidebar").classList.remove('open');
    } else {
      setSidebar(!sidebar)
      document.querySelector(".page-main-header").classList.add('open');
      document.querySelector(".page-sidebar").classList.add('open');
    }
  }

  return (
    <Fragment>
      <div className="page-main-header" >
        <div className="main-header-right row">
          <div className="mobile-sidebar d-block">
            <div className="media-body text-right switch-sm d-flex justify-content-around">
              <div>
                <label className="switch mt-2">
                  <a href="#master" onClick={() => openCloseSidebar()}>
                    <AlignLeft className="mt-2" />
                  </a>
                </label>
              </div>
              <div className='heading mt-2 pl-4'>
                <span> Rental Management System </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
};
export default Header;