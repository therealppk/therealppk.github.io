import {Container, Nav, Navbar} from "react-bootstrap";

function NavigationBar() {
    return (
        <Navbar>
            <Container className="py-4 fs-4 fw-bolder">
                <Navbar.Brand className="fs-2 display-1 fw-bold" href="#home">Pradyumna Prakash Khawas</Navbar.Brand>
                <Nav className="justify-content-end">
                    <Nav.Item>
                        <Nav.Link href="https://www.linkedin.com/in/pradyumna-khawas/" target="_blank">
                            LinkedIn&nbsp;<i className="bi bi-linkedin"></i>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="https://github.com/therealppk" target="_blank">
                            Github&nbsp;<i className="bi bi-github"></i>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="https://www.instagram.com/therealppk/" target="_blank">
                            Instagram&nbsp;<i className="bi bi-instagram"></i>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;