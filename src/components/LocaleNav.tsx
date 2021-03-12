import { FunctionComponent } from "react";
import { NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { selectSettingsLocale } from "../store";
import { LocaleLink } from ".";

export const LocaleNav: FunctionComponent = () => {
  const id = uuid();
  const currentLocale = useSelector(selectSettingsLocale);
  const locales = Array.from(
    new Set(["en-US", "de-DE", currentLocale, navigator.language])
  );

  return (
    <NavDropdown drop="up" title="Language" id={`${id}-dropdown-language`}>
      {locales.map((locale) => (
        <LocaleLink locale={locale} key={locale} />
      ))}
    </NavDropdown>
  );
};
