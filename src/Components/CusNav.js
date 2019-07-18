import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
//import {Row,Col} from 'react-bootstrap'
import { ReactComponent as Upload} from '../Logo/cloud-backup-up-arrow.svg';
import { ReactComponent as Practice } from '../Logo/puzzle.svg';

export default class CusNav extends React.Component{
    render(){
        return(
            /*<Row className='nar-bar justify-content-sm-start'>
                <Col sm={12} className='nar-bar-logo'>
                    <p>Reversi AI</p> 
                </Col>
            </Row>*/
            <React.Fragment>
            <Navbar 
            collapseOnSelect
            expand="lg"
            variant="dark"
            className="nar-bg">
                <Navbar.Brand className="center-text" href="#home">Reversi AI</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className='ml-auto float-right'>
                    <Nav.Link href="#">Dash board</Nav.Link>
                    <Nav.Link eventKey={2} href="#" className="buttom-theme"> Log out</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Navbar className="justify-content-between" style={{maxWidth:'6em'}}>
                <Nav.Link className="straight-up">
                <Upload width="28px" height="28px" strokeWidth="25" stroke="#002F35" />
                </Nav.Link>
                <Nav.Link className="straight-up" disabled>
                <Practice width="32px" height="32px" style={{opacity: 0.5}}/>
                </Nav.Link>  
            </Navbar>
            </React.Fragment>
        )
    }
}