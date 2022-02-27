import React, { Fragment } from 'react'
import Breadcrumb from '../common/breadcrumb';
import CategoryModal from '../modals/CategoryModal';

const CategoryGrid = ({ modal, toggle }) => {
    return (
        <Fragment>
            <Breadcrumb title="Category Master" parent="Master" />
            <div>
                <CategoryModal modal={modal} toggle={toggle} />
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
                                                    <th scope="col">{"Description"}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">{"1"}</th>
                                                    <td>{"Laptops"}</td>
                                                    <td>{"Laptop's of Various Configuration."}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">{"2"}</th>
                                                    <td>{"Desktops"}</td>
                                                    <td>{"Desktops of Various Configuration."}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">{"3"}</th>
                                                    <td>{"Tablets"}</td>
                                                    <td>{"Tablets of Various Configuration."}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">{"4"}</th>
                                                    <td>{"Mobile Phones"}</td>
                                                    <td>{"Mobile Phones of Various Configuration."}</td>
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

export default CategoryGrid