import { useTranslation, Trans } from "react-i18next";
import "./App.css";
import Home from "./components/pages/home";
import Responsive from "./components/responsive-mui";

const lngs = {
  en: { nativeName: "English" },
  de: { nativeName: "Deutsch" },
};

function App() {
  const { t, i18n } = useTranslation();

  console.log("app");

  return (
    <div className="app">
      <Home />
      <span><Trans i18nKey="description"></Trans></span>
      <div>
        {Object.keys(lngs).map((lng) => {
          return (
            <button type="submit" onClick={() => i18n.changeLanguage(lng)}>
              changeLanguage
            </button>
          );
        })}
      </div>
      <div>{t("description")}</div>
      <Responsive></Responsive>
    </div>
  );
}

export default App;
