import {Col, Container, Row} from "react-bootstrap";
import TeamProject from "./project";

function Team({name, description, projects}) {
    return (
        <Row className="py-3">
            <Col>
                <Container className="px-0 pb-1 display-4 fw-bold">{name}</Container>
                {description !== undefined && description}
                {
                    projects !== undefined && projects.map(project => (
                        <TeamProject {...project}/>
                    ))
                }
            </Col>
        </Row>
    )
}

export default Team;