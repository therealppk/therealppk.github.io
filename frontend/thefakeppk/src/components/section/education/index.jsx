import {Container} from "react-bootstrap";
import SectionTitle from "../title";
import EducationRecord from "./record";

function Experience({records}) {
    return (
        <Container className="fs-4 fw-medium">
            <SectionTitle title="Education"/>
            {
                records.map(record => (
                    <EducationRecord {...record}/>
                ))
            }
        </Container>
    )
}

export default Experience;