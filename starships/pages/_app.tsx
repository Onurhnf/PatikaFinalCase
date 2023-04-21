import { appWithTranslation } from "next-i18next";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/utility/CustomTheme";
import type { AppProps } from "next/app";

import { Button, Grid } from "@mui/material";
import Image from "next/image";

import "@/styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { t } = useTranslation("common");
  const changeTo = router.locale === "tr" ? "en" : "tr";

  return (
    <>
      <Link href="/" locale={changeTo}>
        <Button
          sx={{
            position: "absolute",
            right: "3%",
            top: "5%",
            borderWidth: "3px",
            borderRadius: "25px",
            textTransform: "none",
          }}
          size="large"
          variant="outlined"
        >
          {t("change-locale", { changeTo })}
        </Button>
      </Link>
      <Grid item container justifyContent="center">
        <a href="/">
          <Image src="/starwars.png" alt="starwars" width={180} height={130} />
        </a>
      </Grid>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default appWithTranslation(App);
