import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <Row style={{ height: "100vh", alignItems: "center" }}>
        <Col className={styles.coverImageView} md={6} sm={12} />
        <Col md={6} sm={12}>
          <Link href={"/searchpage"}>
            <Button
              style={{
                height: 80,
                fontSize: 20,
                paddingLeft: 30,
                paddingRight: 30,
                borderRadius: 20,
                marginLeft: 30,
              }}
              variant="primary"
            >
              Click, Search and download your favourite image
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
