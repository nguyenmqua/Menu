import React from "react"
import Appetizer from "../components/Appertizer"
import Soup from "../components/Soup"
import { Container, Row, Col } from 'reactstrap';
import Banner from "../components/Banner"
import Salads from "../components/Salads"
import Entrees from "../components/Entrees"
import Footer from "../components/Footer"
const Home = () =>{

    return(
    <Container>
    <Row>
        <Col className="banner">
            <Banner />
        </Col>
    </Row>
    <Row>
        <Col className="menus" sm="12" md={{ size: 8, offset: 2 }}>
            <Appetizer />
            <Soup />
            <Salads />
            <Entrees />
        </Col>
    </Row>
    <Row>
        <Col>
        <Footer />
        </Col>
    </Row>
  </Container>
    )

}

export default Home