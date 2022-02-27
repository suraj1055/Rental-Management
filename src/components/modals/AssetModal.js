import React, { Fragment } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const AssetModal = ({ modal, toggle }) => {
    return (
        <Fragment>
            <Modal isOpen={modal} toggle={toggle} centered>
                <ModalHeader toggle={toggle}> Add Asset </ModalHeader>
                <ModalBody>
                    <form>
                        <div className="d-flex justify-content-between">
                            <div className="form-group">
                                <label className="col-form-label">Brand:</label>
                                <input className="form-control" type="text" />
                            </div>
                            <div className="form-group">
                                <label className="col-form-label">Model:</label>
                                <input className="form-control" type="text" />
                            </div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="form-group">
                                <label className="col-form-label">Processor:</label>
                                <input className="form-control" type="text" />
                            </div>
                            <div className="form-group">
                                <label className="col-form-label">Screen Size:</label>
                                <input className="form-control" type="text" />
                            </div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="form-group">
                                <label className="col-form-label">RAM:</label>
                                <input className="form-control" type="text" />
                            </div>
                            <div className="form-group">
                                <label className="col-form-label">Hard Disk:</label>
                                <input className="form-control" type="text" />
                            </div>
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary"> Save </Button>
                    <Button color="secondary" onClick={toggle}> Cancel </Button>
                </ModalFooter>
            </Modal>
        </Fragment>
    )
}

export default AssetModal;