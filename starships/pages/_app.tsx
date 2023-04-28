import { appWithTranslation } from "next-i18next";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import Helpers from "@/utility/Helpers";
import theme from "@/utility/CustomTheme";
import type { AppProps } from "next/app";

import TranslateIcon from "@mui/icons-material/Translate";
import { Button, Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Image from "next/image";

import "@/styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  const isMdDown = Helpers.useMediaQuery("down", "md");
  const router = useRouter();
  const { t } = useTranslation("common");
  const changeTo = router.locale === "tr" ? "en" : "tr";

  const handleLocaleChange = () => {
    const queryParams = router.query;
    // Include any existing query parameters in the URL
    router.push(
      {
        pathname: router.pathname,
        query: { ...queryParams },
      },
      undefined,

      { locale: changeTo }
    );
  };

  const handleLogoClick = () => {
    router.push("/", undefined, { locale: router.locale });
  };

  return (
    <>
      <Button
        endIcon={<TranslateIcon color="info" />}
        onClick={handleLocaleChange}
        sx={{
          position: "absolute",
          right: "3%",
          top: "5%",
          borderWidth: "3px",
          borderRadius: "25px",
          textTransform: "none",
        }}
        size={isMdDown ? "small" : "large"}
        variant="outlined"
      >
        {t(isMdDown ? "change-locale-mobile" : `change-locale`, { changeTo })}
      </Button>
      <Grid item container justifyContent="center">
        <Image
          src="/starwars.png"
          alt="starwars"
          width={180}
          height={130}
          loading="lazy"
          onClick={handleLogoClick}
          style={{ cursor: "pointer" }}
        />
      </Grid>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default appWithTranslation(App);
