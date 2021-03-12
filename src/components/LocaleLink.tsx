import { FunctionComponent } from "react";
import { NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { FormattedDisplayName } from "react-intl";
import { selectSettingsLocale, updateLocale, useAppDispatch } from "../store";

export const LocaleLink: FunctionComponent<{ locale: string }> = ({
  locale,
}) => {
  const dispatch = useAppDispatch();
  const currentLocale = useSelector(selectSettingsLocale);

  return (
    <NavDropdown.Item
      active={currentLocale === locale}
      onClick={() => dispatch(updateLocale(locale))}
    >
      <FormattedDisplayName type="language" value={locale} />
    </NavDropdown.Item>
  );
};
