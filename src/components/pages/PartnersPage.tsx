import { FunctionComponent } from "react";
import { Container, Row, Col } from "react-bootstrap";

export const PartnersPage: FunctionComponent = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h2>Projektpartner</h2>
          <p>
            Partner des Thüringer Flurnamenprojektes sind:
            <dl>
              <dt>
                <a
                  href="https://www.thulb.uni-jena.de/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Thüringer Universitäts- und Landesbibliothek
                </a>
              </dt>
              <dd>Entwicklung Datenbank und Portal</dd>
              <dt>
                <a
                  href="http://historische-kommission-fuer-thueringen.de/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Historische Kommission für Thüringen
                </a>
              </dt>
              <dd>
                wissenschaftliche Beratung hinsichtlich Thüringer
                Regionalgeschichte
              </dd>
              <dt>
                <a
                  href="https://tlbg.thueringen.de/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Landesvermessungsamt Thüringen
                </a>
              </dt>
              <dd>Bereitstellung des digitalen Kartenmaterials</dd>
              <dt>
                <a
                  href="https://heimatbund-thueringen.de/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Heimatbund Thüringen e.V.
                </a>
              </dt>
              <dd>
                Bereitstellung der Sammlungen ehrenamtlicher Mitarbeiter im
                Projekt „Flurnamen und Regionalgeschichte“
              </dd>
              <dt>
                <a
                  href="https://dhnet.uni-jena.de/"
                  target="_blank"
                  rel="noreferrer"
                >
                  DHnet | Jena
                </a>
              </dt>
              <dd>Beratung bei DH-relevanten Fragen</dd>
              <dt>
                <a
                  href="https://mscj.uni-jena.de/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Michael Stifel Center Jena
                </a>
              </dt>
              <dd>Beratung bei informationstechnologischen Fragestellungen</dd>
              <dt>
                <a href="https://gbv.de/" target="_blank" rel="noreferrer">
                  Gemeinsamer Bibliotheksverbund (GBV
                </a>
                )
              </dt>
              <dt>
                <a
                  href="https://denkmalpflege.thueringen.de/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Thüringer Landesamt für Archäologie
                </a>
              </dt>
              <dt>
                <a
                  href="https://digicult-verbund.de/"
                  target="_blank"
                  rel="noreferrer"
                >
                  digiCULT Verbund eG
                </a>
              </dt>
            </dl>
          </p>
        </Col>
      </Row>
    </Container>
  );
};
