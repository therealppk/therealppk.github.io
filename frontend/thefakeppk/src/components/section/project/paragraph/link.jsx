import {Container} from "react-bootstrap";

function LinkParagraph({content, href}) {
    return (
        <a href={href} style={{color: "inherit"}}>
            <Container className="px-0 py-2 fs-5 fw-bold" dangerouslySetInnerHTML={{__html: content}}/>
        </a>
    )
}

export default LinkParagraph;