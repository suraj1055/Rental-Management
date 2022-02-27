import React, { Fragment } from 'react'
import Breadcrumb from '../common/breadcrumb';
import AssetModal from '../modals/AssetModal';

const AssetGrid = ({ modal, toggle }) => {
  return (
    <Fragment>
      <Breadcrumb title="Asset Master" parent="Master" />
      <div>
        <AssetModal modal={modal} toggle={toggle} />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <button className="btn btn-pill btn-primary btn-air-primary" type="button" onClick={toggle}> Create New </button>
              </div>
              <div className="card-block row">
                <div className="col-sm-12 col-lg-12 col-xl-12">
                  <div className="table-responsive">
                    <table className="table">
                      <thead className="table-primary">
                        <tr>
                          <th scope="col">{"Sr No."}</th>
                          <th scope="col">{"Category"}</th>
                          <th scope="col">{"Brand"}</th>
                          <th scope="col">{"Model"}</th>
                          <th scope="col">{"Processor"}</th>
                          <th scope="col">{"Screen Size"}</th>
                          <th scope="col">{"RAM"}</th>
                          <th scope="col">{"Hard Disk"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">{"1"}</th>
                          <td>{"LAPTOP"}</td>
                          <td>{"HP"}</td>
                          <td>{"840 G2"}</td>
                          <td>{"i5 7th Gen"}</td>
                          <td>{"14.1 inches"}</td>
                          <td>{"4 GB"}</td>
                          <td>{"500 GB"}</td>
                        </tr>
                        <tr>
                          <th scope="row">{"2"}</th>
                          <td>{"LAPTOP"}</td>
                          <td>{"DELL"}</td>
                          <td>{"S3500"}</td>
                          <td>{"i5 5th Gen"}</td>
                          <td>{"15 inches"}</td>
                          <td>{"4 GB"}</td>
                          <td>{"1 TB"}</td>
                        </tr>
                        <tr>
                          <th scope="row">{"3"}</th>
                          <td>{"LAPTOP"}</td>
                          <td>{"LENOVO"}</td>
                          <td>{"E41-15"}</td>
                          <td>{"i3 5th Gen"}</td>
                          <td>{"21 inches"}</td>
                          <td>{" 8 GB "}</td>
                          <td>{"500 GB"}</td>
                        </tr>
                        <tr>
                          <th scope="row">{"4"}</th>
                          <td>{"LAPTOP"}</td>
                          <td>{"ACER"}</td>
                          <td>{"S15"}</td>
                          <td>{"i3 9th Gen"}</td>
                          <td>{"18 inches"}</td>
                          <td>{"8 GB"}</td>
                          <td>{"1 TB"}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Fragment>
  )
}

export default AssetGrid;