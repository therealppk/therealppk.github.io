import {Col, Row} from "react-bootstrap";

function Title(props) {
    return (
        <Row className="py-0 pt-5">
            <Col sm="0" md="0" lg="1" className="display-4 fw-bold d-flex justify-content-center align-items-center">
                <i className="bi bi-arrow-right-circle-fill"></i>
            </Col>
            <Col lg="11" className="display-2 fw-bold">
                {props.title}
            </Col>
        </Row>
    )
}

export default Title;