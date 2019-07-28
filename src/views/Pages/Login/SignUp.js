import React from 'react';
import { Card, CardBody , Button} from 'reactstrap';
import { Link } from 'react-router-dom';

const SingUp = (props)=>(

    <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
        <CardBody className="text-center">
            <div>
                <h2>Sign up</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua.
                </p>
                <Link to="/register">
                <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
                </Link>
            </div>
        </CardBody>
    </Card>
);
export default SingUp;