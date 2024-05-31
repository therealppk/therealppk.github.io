import {Container} from "react-bootstrap";
import SectionTitle from "../title";
import ExperienceRecord from "./record";

function Experience({records}) {
    return (
        <Container className="fs-4 fw-medium">
            <SectionTitle title="Experience"/>
            {
                records.map(record => (
                    <ExperienceRecord {...record}/>
                ))
            }
        </Container>
    )
}

export default Experience;