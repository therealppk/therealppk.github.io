import {Col, Row} from "react-bootstrap";

function ExperienceTechUsedRecord({type, value}) {
    return (
        <Row className="py-2">
            <Col lg="3" className="display-6 fw-bolder">
                {type}
            </Col>
            <Col lg="9">
                {value}
            </Col>
        </Row>
    )
}

export default ExperienceTechUsedRecord;