import {Col, Row} from "react-bootstrap";
import ExperienceTitle from "./title";
import ExperienceTechUsed from "./techused";
import Team from "./team";

function ExperienceRecord({company, role, period, description, teams, techUsed}) {
    return (
        <Row className="py-4">
            <ExperienceTitle company={company} role={role} period={period}/>
            <Col lg="6">
                <Row className="pb-3">
                    <Col dangerouslySetInnerHTML={{__html: description}}/>
                </Row>
                {
                    teams !== undefined && teams.map(team => (
                        <Team {...team}/>
                    ))
                }
                <Row>
                    <ExperienceTechUsed {...techUsed}/>
                </Row>
            </Col>
        </Row>
    )
}

export default ExperienceRecord;