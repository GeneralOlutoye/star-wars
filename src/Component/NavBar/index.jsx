import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../images/starwarsimg.png'

export const Navibar = () => {
  return (
    <Navbar className='shadow-md' bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">{
          <img src={Logo} alt="Logo" className="w-16 my-1
           mx-auto" />}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}