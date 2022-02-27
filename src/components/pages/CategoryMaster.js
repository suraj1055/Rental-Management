import React, { Fragment, useState } from 'react';
import CategoryGrid from '../grids/CategoryGrid'

const CategoryMaster = () => {

  const [modal, setModal] = useState();

  const toggle = () => {
    setModal(!modal)
  }

  return (
    <Fragment>
      <CategoryGrid modal={modal} setModal={setModal} toggle={toggle} />
    </Fragment>
  )
}

export default CategoryMaster