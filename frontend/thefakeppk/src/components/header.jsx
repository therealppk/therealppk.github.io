import {Col, Container, Row} from "react-bootstrap";

function Header() {
    return (
        <Container className="display-1 fw-bolder py-5">
            <Row>
                <Col lg={{span: 10, offset: 2}}>
                    <span style={{color: "#5c6b73"}}>Software Engineer</span> with experience building platforms for
                    complex problems.
                </Col>
            </Row>
        </Container>
    )
}

export default Header;