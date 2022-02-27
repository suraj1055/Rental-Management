import React, { useState } from 'react';
import ComponentGrid from '../grids/ComponentGrid'

const ComponentMaster = () => {

  const [modal, setModal] = useState();

  const toggle = () => {
    setModal(!modal)
  }

  return (
    <ComponentGrid modal={modal} toggle={toggle} />
  )
}

export default ComponentMaster;