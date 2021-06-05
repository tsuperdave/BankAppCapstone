import { useState } from "react";
import { Button, Jumbotron } from "react-bootstrap";
import RegisterPopup from './RegisterPopup'

import arnold from '../resources/arnold.png'


const Register = () =>  {
    const [modalShow, setModalShow] = useState(false);

    return (
        <Jumbotron>
        <h1>
            Hey Noodle Arms
        </h1>
        <p>
            Sign up for an account, maybe?
        </p>
            <img src={arnold} alt="arnold.png" width="200" />
        <p>
            <Button id="sign-up" variant="primary" onClick={() => setModalShow(true)}>
                Create An Account! Nooow!
            </Button>

            <RegisterPopup
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </p>
    </Jumbotron>
    );            
}

export default Register