import {Col, Container} from "react-bootstrap";

function EducationTitle({university, degree, major, period}) {
    return (
        <Col lg={{span: 5, offset: 1}}>
            <span className="display-5 fw-medium">{university}</span><br/>
            <span className="display-3 fw-bold">{degree}</span><br/>
            {major !== undefined &&
                <Container className="px-0"><span className="display-5 fw-bold">{major}</span><br/></Container>}
            <span className="fs-4 fw-medium">{period}</span>
        </Col>
    )
}

export default EducationTitle;