import 'bootstrap/dist/css/bootstrap.css'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import zet from './zet.png'

function Bootnavbar ()  {
    return(
        <div className="BootNavbar">
            <Navbar bg='' variant='' sticky='top' expand='lg' collapseOnSelect style={{fontSize: '22px'}} >                
                <Navbar.Brand> <img src={zet} style={{height: "50px", width: "80px",marginLeft: "130px", marginRight: "10px"}} />
                   
                </Navbar.Brand>

                <Navbar.Toggle/>
                <Navbar.Collapse >

                <Nav >
                    <NavDropdown title='תאגיד' style={{marginLeft: '60px' }}>
                        <NavDropdown.Item href="#">עיריית הרצליה</NavDropdown.Item>
                        <NavDropdown.Item href="#">הרצלייה פיתוח</NavDropdown.Item>
                        <NavDropdown.Item href="#">חברת הגיחון</NavDropdown.Item>
                        <NavDropdown.Item href="#">תאגיד שידור המים</NavDropdown.Item>
                        <NavDropdown.Item href="#">תאגיד 1</NavDropdown.Item>
                        <NavDropdown.Item href="#">תאגיד המים אביבים</NavDropdown.Item>
                        <NavDropdown.Item href="#">תאגיד מניב</NavDropdown.Item>
                        <NavDropdown.Item href="#">עמית בית יקום</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href='#' style={{fontWeight:'bold'}}>ראשי</Nav.Link>
                    <Nav.Link href='#'>אירועים</Nav.Link>
                    <Nav.Link href='#'>התרעות</Nav.Link>
                    <Nav.Link href='#'>לחץ בצינור</Nav.Link>
                    <NavDropdown title='ניהול'>
                        <NavDropdown.Item href="#">הידרנטים</NavDropdown.Item>
                        <NavDropdown.Item href="#">לקוחות</NavDropdown.Item>
                        <NavDropdown.Item href="#">משתמשים</NavDropdown.Item>
                        <NavDropdown.Item href="#">פרופילים</NavDropdown.Item>
                        <NavDropdown.Item href="#">פרמטרים</NavDropdown.Item>
                    </NavDropdown>
                </Nav>

                </Navbar.Collapse>

            </Navbar>
            
        </div>

    );
}

export default Bootnavbar;