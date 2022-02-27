import React, { useState, Fragment } from 'react'
import { AlignLeft } from 'react-feather';
import { Link } from 'react-router-dom';

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
            <div className="media-body text-right switch-sm d-flex justify-content-between">
              <div>
                <label className="switch mt-2">
                  <a href="#master" onClick={() => openCloseSidebar()}>
                    <AlignLeft className="mt-2"/>
                  </a>
                </label>
              </div>
              <div className='mt-2 pl-4'>
                <Link>
                  <h3> Rental Management System </h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
};
export default Header;