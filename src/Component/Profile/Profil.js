import Address from './Address'
import './Profil.css'
import FullName from './FullName'
import ProfilPhoto from './ProfilPhoto'
import Form from 'react-bootstrap/Form'
import {Navbar,Nav,FormControl,Button,Accordion,Card} from 'react-bootstrap';

const Profil = () => {
    return (
        <div>
     <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Profil</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Acceuil</Nav.Link>
      <Nav.Link href="#features">Setting</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar>
  <Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body >
      <Card style={{ width: '400rem',height:'50rem' }}>
  <Card.Img variant="top"/>
  <Card.Body className="cardBody">
    <Card.Text >
            <FullName></FullName>
            <Address></Address>
            <ProfilPhoto></ProfilPhoto>
    </Card.Text>
  </Card.Body>
</Card>
           
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        Click me!
      </Accordion.Toggle>
    </Card.Header>
   
  </Card>
</Accordion>



        </div>
    )
}

export default Profil
