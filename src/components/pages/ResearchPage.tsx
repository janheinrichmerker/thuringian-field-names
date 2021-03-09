import { FunctionComponent } from "react";
import { Container, Row, Col } from "react-bootstrap";

export const ResearchPage: FunctionComponent = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h2>Flurnamenforschung</h2>
          <p>
            Flurnamen sind geschichtliche Denkmäler, die ein Bild der früheren
            Natur- und Kulturlandschaft sowie der Lebensweise der Menschen
            vermitteln. Sie können u.a. von der Archäologie und der
            Siedlungsgeschichte herangezogen werden, um ältere, heute verborgene
            Flurgliederungen aufzudecken oder um Wüstungen zu lokalisieren.
            Viele Flurnamen weisen auf den Landesausbau und eine frühere
            Rodungstätigkeit hin.
          </p>
          <p>
            Auch über die Kontakte mit einer anderssprachigen Bevölkerung geben
            sie Auskunft, im südlichen und westlichen deutschen Sprachraum im
            Hinblick auf die romanisch-deutsche bzw. galloromanisch-deutsche
            Sprachberührung, an der Ostgrenze des deutschen Sprachraums
            hinsichtlich des slawisch-deutschen Sprachkontakts. So lassen sich
            etwa im Osten und in der Mitte Thüringens zahlreiche Flurnamen als
            Slavica identifizieren und dienen damit gemeinsam mit slawischen
            Ortsnamen und archäologischen Funden als Zeugnisse slawischer
            Ansiedlung. Auch im weiteren deutsch-slawischen Kontaktgebiet
            besitzen die slawischen Flurnamen Aussagekraft hinsichtlich des
            Verhältnisses der verschiedenen Ethnien zueinander.
          </p>
          <p>
            Die Wirtschafts- und die Sozialgeschichte nutzen die
            Flurnamenforschung, um z.B. Aussagen zu örtlichen Bodenschätzen, zur
            vorherrschenden Nutzung des Landes oder zum Anbau von Sonderkulturen
            machen zu können. Die Heimatforschung und die Volkskunde greifen
            schon seit Langem auf sprachwissenschaftliche Untersuchungen von
            Flurnamen zurück, da sie wertvolle Hinweise zu lokalen Dialekten,
            zur heimatlichen Siedlungs-, Wirtschafts- und Sozialgeschichte, zur
            Wüstungsforschung oder zur lokalen Urgeschichte geben können. Auch
            die Rechtsgeschichte, Kirchen- und Personengeschichte arbeiten mit
            namenkundlichen Methoden. Die Namenkunde wird deshalb von der
            gesamthistorischen Forschung als eine Art „Hilfswissenschaft“
            betrachtet.
          </p>
        </Col>
      </Row>
    </Container>
  );
};
