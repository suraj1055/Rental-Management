import React, { useState } from 'react';
import AssetGrid from '../grids/AssetGrid'

const AssetMaster = () => {

  const [modal, setModal] = useState();

  const toggle = () => {
    setModal(!modal)
  }

  return (
    <AssetGrid modal={modal} toggle={toggle} />
  )
}

export default AssetMaster