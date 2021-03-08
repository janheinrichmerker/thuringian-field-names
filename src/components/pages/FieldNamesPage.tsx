import { Component, createRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";

class ConnectedFieldNamesPage extends Component<RouteComponentProps> {
  private overviewRef = createRef<HTMLDivElement>();
  private natureRef = createRef<HTMLDivElement>();
  private cultureRef = createRef<HTMLDivElement>();

  private autoScroll() {
    if (this.props.match.path === "/field-names" && this.overviewRef.current) {
      this.scrollTo(this.overviewRef.current);
    } else if (
      this.props.match.path === "/field-names/nature" &&
      this.natureRef.current
    ) {
      this.scrollTo(this.natureRef.current);
    } else if (
      this.props.match.path === "/field-names/culture" &&
      this.cultureRef.current
    ) {
      this.scrollTo(this.cultureRef.current);
    }
  }

  private scrollTo(element: HTMLElement) {
    var offsetPosition = element.offsetTop - 72;
    document.documentElement.scrollTop = offsetPosition;
  }

  componentDidMount() {
    this.autoScroll();
  }

  componentDidUpdate() {
    this.autoScroll();
  }

  render() {
    return (
      <Container>
        <Row ref={this.overviewRef}>
          <Col>
            <h2>Flurnamen</h2>
            <p>
              Flurnamen sind Bezeichnungen unbewohnter Örtlichkeiten und von
              Geländegegebenheiten, an denen sich Menschen in der Landschaft
              orientieren. Dies umfasst u.a. Berge und Täler, Bäche, Flüsse,
              Teiche und Seen, Wälder und Felder. Eingeschlossen werden davon
              auch Namen, die heute infolge der Einbeziehung ihrer Bezugsobjekte
              zu Bezeichnungen von Straßen, Gassen und Plätzen innerhalb einer
              Ortschaft geworden sind.
            </p>
            <p>
              Nach dem Benennungsmotiv, also dem namengebenden Objekt oder der
              namengebenden Ursache, werden Flurnamen in{" "}
              <Link to="/field-names/nature">Natur- </Link> und{" "}
              <Link to="/field-names/culture">Kulturnamen</Link> unterteilt.
            </p>
          </Col>
        </Row>
        <hr />
        <Row ref={this.natureRef}>
          <Col>
            {/* TODO Link field names to search of that particular field name. */}
            <h3>Naturnamen</h3>
            <p>
              Naturnamen weisen auf die natürliche Beschaffenheit der
              unkultivierten Landschaft hin. Sie nehmen Bezug auf Gegebenheiten
              wie Berg und Tal, Wasser, Wald, Pflanzen, Tiere,
              Bodenbeschaffenheit usw. Hierher gehören beispielsweise Flurnamen,
              deren Motivation in der Ausdehnung und Begrenzung der von ihnen
              bezeichneten Flächen zu finden ist.
            </p>
            <p>
              Dazu zählen Allgemeinbezeichnungen für Geländeteile (
              <em>In den Talländern</em>), für die allgemeine Gestalt der
              Grundstücke (<em>Gehren</em>, <em>Haken</em>) oder für ihre
              natürliche Lage (<em>Im Himmelreich</em>). Auch die Morphologie,
              also die Geländebeschaffenheit, spielt eine Rolle. Dies betrifft
              die Gruppe der Berge, Hügel, Bergteile und Hänge, ebene Flächen,
              Täler und Senken: <em>Auf dem Berge</em>, <em>Am Hange</em>,{" "}
              <em>Auf dem Plane</em>, <em>Im Loche</em>.
            </p>
            <p>
              Bei den geologisch motivierten Namen werden Art und Beschaffenheit
              des Bodens thematisiert: <em>Auf dem Melm</em>,{" "}
              <em>In den Kieswiesen</em>. Gewässerbezeichnungen und
              Sumpfland-Benennungen wären zum Beispiel <em>Borngarten</em> und{" "}
              <em>Strut</em>.
            </p>
            <p>
              Eine große Rolle spielt die Bodenbedeckung. Bildungen mit dem
              Kollektivsuffix <em>‑icht</em> fallen oftmals in den
              Motivationsbereich Wald, Busch und Bäume: <em>Weidicht</em>,{" "}
              <em>Erlicht</em>, <em>Tännigt</em>. Als Bezeichnung für Grasland
              sind häufig Zusammensetzungen mit <em>‑wiese</em> zu finden. Auch
              Tierbezeichnungen spiegeln sich häufig in Flurnamen (
              <em>Fuchslöcher</em>, <em>Wolfsgrube</em>).
            </p>
          </Col>
        </Row>
        <hr />
        <Row ref={this.cultureRef}>
          <Col>
            <h3>Kulturnamen</h3>
            <p>
              Die Kulturnamen weisen im Gegensatz zu den Naturnamen auf die
              kultivierende oder zivilisatorische Tätigkeit des Menschen hin.
              Hierher gehören beispielsweise die Namen von Landrodungen (
              <em>Rodeländer</em>, <em>Bernsroda</em>), die Bezeichnungen von
              Nutzland (<em>In den kurzen Äckern</em>, <em>Auf der Trift</em>)
              oder Flurnamen, welche die besondere Nutzung des Flurstücks, etwa
              durch den Anbau einer bestimmten Pflanze oder die Viehzucht,
              beinhalten (<em>Flachsäcker</em>, <em>Am Lämmerberge</em>,{" "}
              <em>Am Weinberge</em>).
            </p>
            <p>
              Viele Flurnamen sind mit Zahlen oder Maßeinheiten kombiniert (
              <em>In den dreizehn Gelengen</em>, <em>Auf der Hufe</em>) oder
              benennen Sonderland (<em>Gemeindeanger</em>).
            </p>
            <p>
              Durch den Zusatz von Vor- oder Familiennamen oder Hinweise auf den
              Nutzer lassen sich gleiche oder ähnliche Flurnamen unterscheiden (
              <em>Auf der Pfarrwiese</em>,<em>Helbings Weingarten</em>);
              Siedlungsnamen zeigen die Nähe oder die Zugehörigkeit zur
              betreffenden Siedlung an (<em>Löberschützer Schläge</em>,
              <em>Im Orlamünder Ratsholz</em>).
            </p>
            <p>
              In den Motivationsbereich „Bauwerke und technische Anlagen“ fallen
              Flurstücke, die nach ihrer Nutzung durch den Menschen, ihrer
              Zugehörigkeit oder nach einer baulichen Anlage benannt wurden (
              <em>Im Kalkofen</em>, <em>Am Friedhof</em>). In entsprechend
              genutzten Regionen weisen Flurnamen auf den Abbau von
              Bodenschätzen hin: <em>In den Silbergruben</em>,{" "}
              <em>Am Steinbruch</em>.
            </p>
            <p>
              Bezeichnungen für Verkehrswege und Grenzen werden ebenso in die
              Benennungen aufgenommen (<em>An der Straße</em>,{" "}
              <em>Über der Bahn</em>, <em>Hinter der Grenze</em>), wie solche
              für Bauwerke und Plätze, die mit der Verteidigung des Landes im
              Zusammenhang stehen (<em>Wartberg</em>, <em>Auf der Burg</em>).
            </p>
            <p>
              Ältere Rechtsverhältnisse (<em>Am alten Gericht</em>,{" "}
              <em>Galgenberg</em>) sowie Religion und Kirche (
              <em>Am Frauenholze</em>, <em>Im Pfaffenborn</em>) stellen weitere
              Benennungsmotive dar. Einige Flurnamen weisen einen Bezug zu vor-
              und frühgeschichtlichen Fundplätzen auf oder sind mit Sagen und
              Erzählungen verknüpft. Hier ist eine genaue Überprüfung der
              Befunde und Belege notwendig, da es sonst schnell zu
              Fehletymologien kommen kann.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export const FieldNamesPage = withRouter(ConnectedFieldNamesPage);
