import {Col, Row} from "react-bootstrap";

function CourseListRecord({type, value}) {
    return (
        <Row className="py-2">
            <Col lg="3" className="display-6 fw-bold">
                {type}
            </Col>
            <Col lg="9">
                {value}
            </Col>
        </Row>
    )
}

export default CourseListRecord;