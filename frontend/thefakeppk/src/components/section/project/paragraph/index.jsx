import {Container} from "react-bootstrap";

function NormalParagraph({content}) {
    return (
        <Container className="px-0 py-2" dangerouslySetInnerHTML={{__html: content}}/>
    )
}

export default NormalParagraph;