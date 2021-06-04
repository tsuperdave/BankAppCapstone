import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const AlertSignin = (props) => {
    return (
        <>
            <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
                <Modal.Header closeButton>
                
                </Modal.Header>

                <Modal.Body>
                    
                    <p>
                        YOU MUST BE LOGGED IN TO ACCESS THIS PAGE
                    </p>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>

            </Modal>
        </>
    )
}

export default AlertSignin
