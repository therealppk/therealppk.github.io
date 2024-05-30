import {Col, Container} from "react-bootstrap";
import ExperienceTechUsedRecord from "./record";

function ExperienceTechUsed({languages, packages, frameworks, platforms_and_tools, databases, cloud_platforms}) {
    return (
        <Col className="py-3">
            <Container className="px-0 pb-3 display-4 fw-bold">
                Technologies Used
            </Container>
            {languages !== undefined && <ExperienceTechUsedRecord type="Languages" value={languages}/>}
            {packages !== undefined && <ExperienceTechUsedRecord type="Packages" value={packages}/>}
            {frameworks !== undefined && <ExperienceTechUsedRecord type="Framework" value={frameworks}/>}
            {platforms_and_tools !== undefined &&
                <ExperienceTechUsedRecord type="Platform and Tools" value={platforms_and_tools}/>}
            {databases !== undefined && <ExperienceTechUsedRecord type="Databases" value={databases}/>}
            {cloud_platforms !== undefined &&
                <ExperienceTechUsedRecord type="Cloud Platforms" value={cloud_platforms}/>}
        </Col>
    )
}

export default ExperienceTechUsed;