import { Outlet, Link } from "react-router-dom";
import { Row, Col, } from "reactstrap"

const Layout = () => {
  return (
    <>
      <Row>
        <Col md="3"></Col>
        <Col md="6" className="c_top_tlt">Im1.ai</Col>
        <Col md="3"></Col>
      </Row>
      <Outlet />
    </>
  )
};

export default Layout;