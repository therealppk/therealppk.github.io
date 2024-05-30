import {Col, Container} from "react-bootstrap";
import CourseListRecord from "./record";

function EducationCourseList({courses}) {
    return (
        <Col>
            <Container className="px-0 pb-3 display-4 fw-bold">
                Courses
            </Container>
            {
                courses.map(course_list => (
                    <CourseListRecord {...course_list}/>
                ))
            }
        </Col>
    )
}

export default EducationCourseList;