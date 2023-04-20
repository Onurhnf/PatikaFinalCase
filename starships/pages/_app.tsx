import "@/styles/globals.css";
import { Grid } from "@mui/material";
import type { AppProps } from "next/app";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/utility/i18n";

export default function App({ Component, pageProps }: AppProps) {
  const handleLanguageChange = (lang: string) => {
    localStorage.setItem("i18nLang", lang);
    i18n.changeLanguage(lang);
    window.location.reload();
  };
  return (
    <Fragment>
      <div>
        <button onClick={() => handleLanguageChange("tr")}>TR</button>
        <button onClick={() => handleLanguageChange("en")}>EN</button>
      </div>
      <Grid item container justifyContent={"center"}>
        <Link href={"/"}>
          <Image
            src={"/starwars.png"}
            alt={"starwars"}
            width={180}
            height={130}
          />
        </Link>
      </Grid>
      <I18nextProvider i18n={i18n}>
        <Component {...pageProps} />
      </I18nextProvider>
    </Fragment>
  );
}
