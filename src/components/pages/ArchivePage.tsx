import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

export class ArchivePage extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h2>
              <FormattedMessage id="project.title.full" />
            </h2>
            <p>
              Das Thüringische Flurnamenarchiv wurde 1933 an der
              Friedrich-Schiller-Universität Jena im Rahmen der thüringischen
              Landesstelle für Volkskunde gegründet. Ab 1953 wuchs der Bestand
              rasch an, so dass sich heute für das Gebiet des Freistaats
              Thüringen knapp 126.000 Namenbelege finden. Diese sind aber bei
              Weitem nicht die Gesamtmenge an thüringischen Flurnamen, die
              Schätzungen zufolge bei über 300.000 Namen liegt. Insgesamt wurden
              im Flurnamenarchiv rund 150.000 Flurnamen erfasst, da man sich am
              thüringischen Sprachraum und nicht an der politischen Gliederung
              orientierte. Das Erfassungsgebiet umfasst somit auch Teile des
              südlichen Sachsen-Anhalts. Seit 1982 stagnierte die Arbeit am
              Thüringischen Flurnamenarchiv. Dies änderte sich mit der Übernahme
              der Professur für Geschichte der deutschen Sprache durch Prof. Dr.
              Eckhard Meineke im Jahr 1994, unter dessen Betreuung zahlreiche
              flurnamenkundliche Abschlussarbeiten verfasst wurden.
            </p>
            <p>
              Das im Flurnamenarchiv lagernde Material ist derzeit weder für die
              Wissenschaft noch für die interessierte Öffentlichkeit gut nutzbar
              – es ist vom Zerfall bedroht und befindet sich in Zettelkästen in
              der Obhut von Frau Dr. Barbara Aehnlich, die seit 2004 die
              Flurnamenforschung in Jena weiter vorantreibt. Die Belegsammlung
              des Thüringischen Flurnamenarchivs bildet den Grundstock für eine
              flächendeckende Sammlung und Auswertung der Thüringer
              Flurnamenlandschaft. Von dieser ist Aufschluss zu erwarten über
              die Herkunft und die Motivation der Namen sowie über die
              dialektgebundene Sprachgeschichte des ostmitteldeutschen Raumes.
              Ausgehend von diesem Grundstock, dessen Digitalisierung im Projekt
              vorgenommen wird, soll auch der übrige Flurnamenbestand des
              Freistaates erfasst und nach vorgegebenen Kriterien geordnet
              werden.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
