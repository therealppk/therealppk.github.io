import {Col, Container, Row} from "react-bootstrap";
import NormalParagraph from "./paragraph";
import HighlightParagraph from "./paragraph/highlight";
import LinkParagraph from "./paragraph/link";

function ProjectRecord({index, name, paragraphs}) {
    return (
        <Row className="py-4">
            <Col lg="1">
                <Container className="display-3 fw-light py-2 d-flex justify-content-center">0{index}</Container>
            </Col>
            <Col lg="11">
                <Container className="px-0 pb-3 display-2 fw-bold">{name}</Container>
                {
                    paragraphs.map(paragraph => (
                        <Container className="px-0">
                            {paragraph.type === "normal" && <NormalParagraph content={paragraph.content}/>}
                            {paragraph.type === "highlight" && <HighlightParagraph content={paragraph.content}/>}
                            {paragraph.type === "link" &&
                                <LinkParagraph content={paragraph.content} href={paragraph.link}/>}
                        </Container>
                    ))
                }
            </Col>
        </Row>
    )
}

export default ProjectRecord;