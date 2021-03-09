import { createRef, FunctionComponent, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useRouteMatch } from "react-router-dom";
import { FieldNameHighlight } from "../FieldNameHighlight";

export const FieldNamesPage: FunctionComponent = () => {
  const overviewRef = createRef<HTMLDivElement>();
  const natureRef = createRef<HTMLDivElement>();
  const cultureRef = createRef<HTMLDivElement>();

  const { path } = useRouteMatch();

  function scrollTo(element: HTMLElement) {
    var offsetPosition = element.offsetTop - 72;
    document.documentElement.scrollTop = offsetPosition;
  }

  // Auto-scroll to sections when route path changes.
  useEffect(() => {
    if (path === "/field-names" && overviewRef.current) {
      scrollTo(overviewRef.current);
    } else if (path === "/field-names/nature" && natureRef.current) {
      scrollTo(natureRef.current);
    } else if (path === "/field-names/culture" && cultureRef.current) {
      scrollTo(cultureRef.current);
    }
  }, [path, overviewRef, natureRef, cultureRef]);

  return (
    <Container>
      <Row ref={overviewRef}>
        <Col>
          <h2>Flurnamen</h2>
          <p>
            Flurnamen sind Bezeichnungen unbewohnter Örtlichkeiten und von
            Geländegegebenheiten, an denen sich Menschen in der Landschaft
            orientieren. Dies umfasst u.a. Berge und Täler, Bäche, Flüsse,
            Teiche und Seen, Wälder und Felder. Eingeschlossen werden davon auch
            Namen, die heute infolge der Einbeziehung ihrer Bezugsobjekte zu
            Bezeichnungen von Straßen, Gassen und Plätzen innerhalb einer
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
      <Row ref={natureRef}>
        <Col>
          {/* TODO Link field names to search of that particular field name. */}
          <h3>Naturnamen</h3>
          <p>
            Naturnamen weisen auf die natürliche Beschaffenheit der
            unkultivierten Landschaft hin. Sie nehmen Bezug auf Gegebenheiten
            wie Berg und Tal, Wasser, Wald, Pflanzen, Tiere, Bodenbeschaffenheit
            usw. Hierher gehören beispielsweise Flurnamen, deren Motivation in
            der Ausdehnung und Begrenzung der von ihnen bezeichneten Flächen zu
            finden ist.
          </p>
          <p>
            Dazu zählen Allgemeinbezeichnungen für Geländeteile (
            <FieldNameHighlight query="Talland TODO">
              In den Talländern
            </FieldNameHighlight>
            ), für die allgemeine Gestalt der Grundstücke (
            <FieldNameHighlight>Gehren</FieldNameHighlight>,{" "}
            <FieldNameHighlight>Haken</FieldNameHighlight>) oder für ihre
            natürliche Lage (
            <FieldNameHighlight query="Himmelreich TODO">
              Im Himmelreich
            </FieldNameHighlight>
            ). Auch die Morphologie, also die Geländebeschaffenheit, spielt eine
            Rolle. Dies betrifft die Gruppe der Berge, Hügel, Bergteile und
            Hänge, ebene Flächen, Täler und Senken:{" "}
            <FieldNameHighlight query="Berg TODO">
              Auf dem Berge
            </FieldNameHighlight>
            , <FieldNameHighlight query="Hang">Am Hange</FieldNameHighlight>,{" "}
            <FieldNameHighlight query="Plan TODO">
              Auf dem Plane
            </FieldNameHighlight>
            , <FieldNameHighlight query="Loch">Im Loche</FieldNameHighlight>.
          </p>
          <p>
            Bei den geologisch motivierten Namen werden Art und Beschaffenheit
            des Bodens thematisiert:{" "}
            <FieldNameHighlight query="Melm TODO">
              Auf dem Melm
            </FieldNameHighlight>
            ,{" "}
            <FieldNameHighlight query="Kieswiese">
              In den Kieswiesen
            </FieldNameHighlight>
            . Gewässerbezeichnungen und Sumpfland-Benennungen wären zum Beispiel{" "}
            <FieldNameHighlight>Borngarten</FieldNameHighlight> und{" "}
            <FieldNameHighlight>Strut</FieldNameHighlight>.
          </p>
          <p>
            Eine große Rolle spielt die Bodenbedeckung. Bildungen mit dem
            Kollektivsuffix <em>‑icht</em> fallen oftmals in den
            Motivationsbereich Wald, Busch und Bäume:{" "}
            <FieldNameHighlight query="TODO">Weidicht</FieldNameHighlight>,{" "}
            <FieldNameHighlight>Erlicht</FieldNameHighlight>,{" "}
            <FieldNameHighlight>Tännigt</FieldNameHighlight>. Als Bezeichnung
            für Grasland sind häufig Zusammensetzungen mit{" "}
            <FieldNameHighlight query="Wiese">‑wiese</FieldNameHighlight> zu
            finden. Auch Tierbezeichnungen spiegeln sich häufig in Flurnamen (
            <FieldNameHighlight query="Fuchsloch">
              Fuchslöcher
            </FieldNameHighlight>
            , <FieldNameHighlight query="TODO">Wolfsgrube</FieldNameHighlight>
            ).
          </p>
        </Col>
      </Row>
      <hr />
      <Row ref={cultureRef}>
        <Col>
          <h3>Kulturnamen</h3>
          <p>
            Die Kulturnamen weisen im Gegensatz zu den Naturnamen auf die
            kultivierende oder zivilisatorische Tätigkeit des Menschen hin.
            Hierher gehören beispielsweise die Namen von Landrodungen (
            <FieldNameHighlight query="TODO">Rodeländer</FieldNameHighlight>,{" "}
            <FieldNameHighlight>Bernsroda</FieldNameHighlight>), die
            Bezeichnungen von Nutzland (
            <FieldNameHighlight query="Acker TODO">
              In den kurzen Äckern
            </FieldNameHighlight>
            ,{" "}
            <FieldNameHighlight query="Trift TODO">
              Auf der Trift
            </FieldNameHighlight>
            ) oder Flurnamen, welche die besondere Nutzung des Flurstücks, etwa
            durch den Anbau einer bestimmten Pflanze oder die Viehzucht,
            beinhalten (<FieldNameHighlight>Flachsäcker</FieldNameHighlight>,{" "}
            <FieldNameHighlight query="Lämmerberg">
              Am Lämmerberge
            </FieldNameHighlight>
            ,{" "}
            <FieldNameHighlight query="Weinberg">
              Am Weinberge
            </FieldNameHighlight>
            ).
          </p>
          <p>
            Viele Flurnamen sind mit Zahlen oder Maßeinheiten kombiniert (
            <FieldNameHighlight query="Dreizehn Gelängen">
              In den dreizehn Gelengen
            </FieldNameHighlight>
            ,{" "}
            <FieldNameHighlight query="Hufe TODO">
              Auf der Hufe
            </FieldNameHighlight>
            ) oder benennen Sonderland (
            <FieldNameHighlight>Gemeindeanger</FieldNameHighlight>).
          </p>
          <p>
            Durch den Zusatz von Vor- oder Familiennamen oder Hinweise auf den
            Nutzer lassen sich gleiche oder ähnliche Flurnamen unterscheiden (
            <FieldNameHighlight query="Pfarrwiese">
              Auf der Pfarrwiese
            </FieldNameHighlight>
            , <FieldNameHighlight>Helbings Weingarten</FieldNameHighlight>);
            Siedlungsnamen zeigen die Nähe oder die Zugehörigkeit zur
            betreffenden Siedlung an (
            <FieldNameHighlight query="TODO">
              Löberschützer Schläge
            </FieldNameHighlight>
            ,{" "}
            <FieldNameHighlight query="TODO">
              Im Orlamünder Ratsholz
            </FieldNameHighlight>
            ).
          </p>
          <p>
            In den Motivationsbereich „Bauwerke und technische Anlagen“ fallen
            Flurstücke, die nach ihrer Nutzung durch den Menschen, ihrer
            Zugehörigkeit oder nach einer baulichen Anlage benannt wurden (
            <FieldNameHighlight query="Kalkofen">
              Im Kalkofen
            </FieldNameHighlight>
            ,{" "}
            <FieldNameHighlight query="Friedhof">
              Am Friedhof
            </FieldNameHighlight>
            ). In entsprechend genutzten Regionen weisen Flurnamen auf den Abbau
            von Bodenschätzen hin:{" "}
            <FieldNameHighlight query="Silbergrube">
              In den Silbergruben
            </FieldNameHighlight>
            ,{" "}
            <FieldNameHighlight query="Steinbruch TODO">
              Am Steinbruch
            </FieldNameHighlight>
            .
          </p>
          <p>
            Bezeichnungen für Verkehrswege und Grenzen werden ebenso in die
            Benennungen aufgenommen (
            <FieldNameHighlight query="Straße TODO">
              An der Straße
            </FieldNameHighlight>
            ,{" "}
            <FieldNameHighlight query="Bahn TODO">
              Über der Bahn
            </FieldNameHighlight>
            ,{" "}
            <FieldNameHighlight query="Grenze">
              Hinter der Grenze
            </FieldNameHighlight>
            ), wie solche für Bauwerke und Plätze, die mit der Verteidigung des
            Landes im Zusammenhang stehen (
            <FieldNameHighlight>Wartberg</FieldNameHighlight>,{" "}
            <FieldNameHighlight query="Burg">Auf der Burg</FieldNameHighlight>
            ).
          </p>
          <p>
            Ältere Rechtsverhältnisse (
            <FieldNameHighlight query="Gericht TODO">
              Am alten Gericht
            </FieldNameHighlight>
            , <FieldNameHighlight>Galgenberg</FieldNameHighlight>) sowie
            Religion und Kirche (
            <FieldNameHighlight query="Frauenholz">
              Am Frauenholze
            </FieldNameHighlight>
            ,{" "}
            <FieldNameHighlight query="Pfaffenborn">
              Im Pfaffenborn
            </FieldNameHighlight>
            ) stellen weitere Benennungsmotive dar. Einige Flurnamen weisen
            einen Bezug zu vor- und frühgeschichtlichen Fundplätzen auf oder
            sind mit Sagen und Erzählungen verknüpft. Hier ist eine genaue
            Überprüfung der Befunde und Belege notwendig, da es sonst schnell zu
            Fehletymologien kommen kann.
          </p>
        </Col>
      </Row>
    </Container>
  );
};
