import {Col, Row} from "react-bootstrap";
import EducationTitle from "./title";
import EducationCourseList from "./courselist";

function EducationRecord({university, degree, major, period, courses}) {
    return (
        <Row className="py-4">
            <EducationTitle university={university} degree={degree} major={major} period={period}/>
            <Col lg="6">
                <Row>
                    <EducationCourseList courses={courses}/>
                </Row>
            </Col>
        </Row>
    )
}

export default EducationRecord;