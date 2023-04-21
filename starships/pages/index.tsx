import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSidePropsContext } from "next";

import StarshipSearch from "@/components/starships/StarshipSearch.component";
import StarShipList from "@/components/starships/StarshipList.component";
import StarshipPaging from "@/components/starships/StarshipPaging.component";

import { Constants } from "@/utility/Constants";
import { StarshipsService } from "@/services/starships/Startships.service";
import { IStarship } from "@/interfaces/starships/IStarship.interface";

interface HomeProps extends IStarship.IStarshipList {}

export default function Home({ results, count, next, previous }: HomeProps) {
  return (
    <>
      <Head>
        <title>Starship List</title>
        <meta name="description" content="Patika FMSS case" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StarshipSearch />
      <StarShipList
        count={count}
        next={next}
        previous={previous}
        results={results}
      />
      <StarshipPaging
        next={next}
        previous={previous}
        results={results}
        count={count}
      />
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const { page = "1", search = "" } = context.query;

    const queryString = `?page=${page}${search ? `&search=${search}` : ""}`;

    const result = await StarshipsService.List(queryString as string);

    // staticly added a starship image because there was none in api
    const defaultImageUrl = Constants.DefaultImage;

    const resultsWithDefaultImageAndId = result?.data?.results.map(
      (starship) => ({
        ...starship,
        id: starship.url.split("/").filter(Boolean).pop(),
        imageUrl: defaultImageUrl,
      })
    );

    const props: HomeProps = {
      count: result.data.count,
      next: result.data.next,
      previous: result.data.previous,
      results: resultsWithDefaultImageAndId,
    };

    const i18nProps = await serverSideTranslations(context.locale ?? "tr", [
      "common",
    ]);

    return {
      props: {
        ...props,
        ...i18nProps,
      },
    };
  } catch (error: any) {
    console.log("Err:", error);
    context.res.writeHead(302, { Location: "/" });
    context.res.end();

    return { props: {} };
  }
}
