import {Col, Container, Image, Row} from "react-bootstrap";
import {ReactComponent as Logo} from '../react.svg';

function Footer() {
    return (
        <Container>
            <hr/>
            <Row className="py-5">
                <Col sm="12" lg={{span: 1, offset: 1}}
                     className="py-2 d-flex justify-content-center align-items-center">
                    <Image src="/logo512.png" style={{width: "5rem"}}/>
                </Col>
                <Col sm="12" lg="3" className="py-2 d-flex justify-content-center align-items-center">
                    <Container>
                        <span className="display-5 fw-bolder">Pradyumna Prakash Khawas</span><br/>
                        <span className="fs-5 fw-light">pradyumna.khawas@gmail.com</span>
                    </Container>
                </Col>
                <Col sm="12" lg="2" className="py-2 d-flex justify-content-center align-items-center">
                    <Container>
                        <span className="display-6 fw-bold">Austin, TX</span><br/>
                        <span className="fs-4 fw-light">United States</span>
                    </Container>
                </Col>
                <Col sm="12" lg="3" className="py-2 d-flex justify-content-center align-items-center">
                    <Logo style={{height: "4rem", width: "4rem"}}/>&nbsp;&nbsp;
                    <span className="display-5 fw-bold">Made with React</span>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;