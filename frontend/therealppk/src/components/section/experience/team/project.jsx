import {Container} from "react-bootstrap";

function TeamProject({name, description}) {
    return (
        <Container className="px-0 py-3">
            <Container className="px-0 pb-3 display-5 fw-bold">{name}</Container>
            <Container className="px-0" dangerouslySetInnerHTML={{__html: description}}/>
        </Container>
    )
}

export default TeamProject;