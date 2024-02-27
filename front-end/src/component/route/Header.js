import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (

    <div>
        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
            integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
            crossorigin="anonymous"
        />

        <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
            <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link href="/samples">Home</Nav.Link>
                <Nav.Link href="/samples">SampleList</Nav.Link>
                <NavDropdown title="마이페이지" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/add-sample">Sample 추가</NavDropdown.Item>
                <NavDropdown.Item href="#action2">장바구니</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Sample 삭제</NavDropdown.Item>                
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">구매</NavDropdown.Item>   
                <NavDropdown.Item href="#action5">환불</NavDropdown.Item> 
                </NavDropdown>

                <NavDropdown title="커뮤니티" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/board">게시판</NavDropdown.Item>
                <NavDropdown.Item href="/qna">Q&A</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action6">찾아오기</NavDropdown.Item>
                <NavDropdown.Item href="#action7">컨텍</NavDropdown.Item>
                </NavDropdown>

                <Nav.Link href="#" disabled>
                로그인
                </Nav.Link>
            </Nav>
            <Form className="d-flex">
                <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
            </Form>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
  );
}

export default NavScrollExample;