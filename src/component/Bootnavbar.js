import 'bootstrap/dist/css/bootstrap.css'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import zet from './zet.png'
import './Bootnavbar.css'
const navbar = {};

function Bootnavbar ()  {
    return(
        <div >
            <Navbar className="navbar" bg=''  sticky='top' expand='lg' collapseOnSelect  >                
                <Navbar.Brand> <img src={zet} style={{height: "50px", width: "80px",marginLeft: "130px", marginRight: "10px"}} />
                   
                </Navbar.Brand>

                <Navbar.Toggle/>
                <Navbar.Collapse >

                <Nav >
                    <NavDropdown   style={{marginLeft: '60px' }} 
                        title={
                            <span className="title-navbar">תאגיד</span>
                        }
                    
                    
                    >
                        <NavDropdown.Item  href="#">עיריית הרצליה</NavDropdown.Item>
                        <NavDropdown.Item href="#">הרצלייה פיתוח</NavDropdown.Item>
                        <NavDropdown.Item href="#">חברת הגיחון</NavDropdown.Item>
                        <NavDropdown.Item href="#">תאגיד שידור המים</NavDropdown.Item>
                        <NavDropdown.Item href="#">תאגיד 1</NavDropdown.Item>
                        <NavDropdown.Item href="#">תאגיד המים אביבים</NavDropdown.Item>
                        <NavDropdown.Item href="#">תאגיד מניב</NavDropdown.Item>
                        <NavDropdown.Item href="#">עמית בית יקום</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href='#' style={{fontWeight:'bold',color:'white'}}>ראשי</Nav.Link>
                    <Nav.Link href='#' style={{color:'white'}}>אירועים</Nav.Link>
                    <Nav.Link href='#' style={{color:'white'}}>התרעות</Nav.Link>
                    <Nav.Link href='#' style={{color:'white'}}>לחץ בצינור</Nav.Link>
                    <NavDropdown  title={<span className="title-navbar">ניהול</span>}>
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