import {Container} from "react-bootstrap";

function HighlightParagraph({content}) {
    return (
        <Container className="px-0 py-3 fs-2 fw-medium" dangerouslySetInnerHTML={{__html: content}}/>
    )
}

export default HighlightParagraph;