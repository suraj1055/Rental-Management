import React, { Fragment } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CategoryModal = ({ modal, toggle }) => {
    return (
        <Fragment>
            <Modal isOpen={modal} toggle={toggle} centered>
                <ModalHeader toggle={toggle}> Add Category </ModalHeader>
                <ModalBody>
                    <form>
                        <div className="form-group">
                            <label className="col-form-label" htmlFor="recipient-name">Category:</label>
                            <input className="form-control" type="text" />
                        </div>
                        <div className="form-group">
                            <label className="col-form-label" htmlFor="message-text">Description:</label>
                            <textarea className="form-control" id="message-text"></textarea>
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

export default CategoryModal;