import {Col} from "react-bootstrap";

function ExperienceTitle({company, role, period}) {
    return (
        <Col lg={{span: 5, offset: 1}}>
            <span className="display-5 fw-medium">{company}</span><br/>
            <span className="display-3 fw-bold">{role}</span><br/>
            <span className="fs-4 fw-medium">{period}</span>
        </Col>
    )
}

export default ExperienceTitle;