import Head from "next/head";
import StarShipList from "@/components/starships/StarshipList.component";
import { StarshipsService } from "@/services/starships/Startships.service";
import { IStarship } from "@/interfaces/starships/IStarship.interface";
import { GetServerSidePropsContext } from "next";
import StarshipSearch from "@/components/starships/StarshipSearch.component";
import { useState } from "react";
import { Constants } from "@/utility/Constants";
import StarshipPaging from "@/components/starships/StarshipPaging.component";

export default function Home({
  count,
  next,
  previous,
  initialResults,
}: IStarship.IStarshipList) {
  const [results, setResults] = useState(initialResults);
  const [paging, setPaging] = useState({
    count,
    next,
    previous,
  });
  const handleSearch = (searchResults: any) => {
    setResults(searchResults);
  };

  return (
    <>
      <Head>
        <title>Starship List</title>
        <meta name="description" content="Patika FMSS case" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StarshipSearch onSearch={handleSearch} setPaging={setPaging} />
      <StarShipList
        count={count}
        next={next}
        previous={previous}
        results={results}
        initialResults={[]}
      />

      <StarshipPaging
        paging={paging}
        setPaging={setPaging}
        setResults={setResults}
      />
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const { page = "1" } = context?.query;

    const result = await StarshipsService.List(page as string);
    //staticly added an starship image becasue there was none in api
    const defaultImageUrl = Constants.DefaultImage;

    const resultsWithDefaultImage = result?.data?.results.map((starship) => {
      return {
        ...starship,
        imageUrl: defaultImageUrl,
      };
    });

    return {
      props: {
        count: result.data.count,
        next: result.data.next,
        previous: result.data.previous,
        initialResults: resultsWithDefaultImage,
      },
    };
  } catch (error: any) {
    console.log("Err:", error);
    context.res.writeHead(302, { Location: "/" });
    context.res.end();

    return { props: {} };
  }
}
