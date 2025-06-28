// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// function NavigationBar() {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavigationBar;

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../store/dataslice";
// import NavDropdown from 'react-bootstrap/NavDropdown';

function NavigationBar() {
  const { data } = useSelector((state) => state.dataSlice);
  const dispatch = useDispatch()
  console.log("data: ", data);

  const navigate = useNavigate();

  const onClickLogout = () => {
    Cookies.remove("jwt_token");
    navigate("/");
  };

  const onClickHome = () => {
    dispatch(getData([]))
  }

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{ backgroundColor: "rgb(4, 4, 65)" }}
    >
      <Container className="d-flex justify-content-between">
        <Navbar.Brand style={{ color: "floralwhite" }}>
          <Link to="/home" onClick={onClickHome}>Loyalty App</Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="d-flex justify-content-between"
        >
          <Nav className="me-auto">
            <Nav.Link style={{ color: "floralwhite" }} href="#features">
              <div>
                <p>Nav Name</p> <i>{data.length ? data[0].ship: ''}</i>
              </div>
            </Nav.Link>
            <Nav.Link style={{ color: "floralwhite" }} href="#features">
              <div>
                <p>Azamara Circle</p> <i>{data.length ? data[0].clientId: ''}</i>
              </div>
            </Nav.Link>
            <Nav.Link style={{ color: "floralwhite" }} href="#features">
              <div>
                <p>Current Tier</p> <i>{data.length ? data[0].cabinCategory : ''}</i>
              </div>
            </Nav.Link>
            <Nav.Link style={{ color: "floralwhite" }} href="#features">
              <div>
                <p>Points</p> <i>{data.length ? data[0].convertedRcgPoints: ''}</i>
              </div>
            </Nav.Link>
            <Nav.Link style={{ color: "floralwhite" }} href="#features">
              <div>
                <p>Completed Sailings</p> <i>8</i>
              </div>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link onClick={onClickLogout} style={{ color: "floralwhite" }}>
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
