import {Container} from "react-bootstrap";
import SectionTitle from "../title";
import ProjectRecord from "./record";

function Project({records}) {
    return (
        <Container className="fs-4 fw-medium">
            <SectionTitle title="Projects"/>
            {
                records.map(((record, index) => (
                    <ProjectRecord {...record} index={index + 1}/>
                )))
            }
        </Container>
    )
}

export default Project;