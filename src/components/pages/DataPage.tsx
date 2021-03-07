import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

export class DataPage extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h2>Datengrundlage</h2>
            <p>
              Idealerweise sollen von jedem Flurnamen folgende Punkte bekannt
              sein:
              <ul>
                <li>
                  die amtliche Namenform (aus ALK, Flurkarten und ‑büchern),
                </li>
                <li>die mundartliche Lautung des Namens,</li>
                <li>
                  historische (möglichst weit zurückreichende) Belege (z.B. aus
                  historischen Karten, Lehnbriefen, Grenzbeschreibungen oder
                  Gerichtsbüchern),
                </li>
                <li>
                  die exakte Lage im Gelände (früher verbal beschrieben, heute
                  mit Hilfe von GPS-Daten und den Karten des Thür.
                  Landesvermessungsamtes exakter möglich),
                </li>
                <li>
                  eine genaue Beschreibung des benannten Objektes (z.B. feuchte
                  Wiese, steiniges Feld o.ä.),
                </li>
                <li>
                  überlieferte Hinweise hinsichtlich des Namenursprungs (z.B.
                  Sagen, Erzählungen),
                </li>
                <li>GND-Nummer der Gemarkung</li>
              </ul>
            </p>
            <p>
              Diese Angaben liefert das Thüringische Flurnamenarchiv jedoch nur
              in Teilen, so dass weiterer Erhebungsbedarf besteht.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
