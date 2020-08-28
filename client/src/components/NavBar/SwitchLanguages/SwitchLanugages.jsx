import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "reactstrap";

function SwitchLanguages() {
  const [, i18n] = useTranslation("common");
  return (
    <div>
      {/* <div>{t("header.logIn")}</div> */}
      <Button onClick={() => i18n.changeLanguage("ru")}>Русский</Button>
      <Button onClick={() => i18n.changeLanguage("en")}>English</Button>
    </div>
  );
}

export default SwitchLanguages;
