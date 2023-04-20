import { Endpoints } from "@/enums/api/Endpoints.enum";
import { IStarship } from "@/interfaces/starships/IStarship.interface";
import Http from "@/utility/Http";

export const StarshipsService = {
  /**
   * @returns Starship List
   */
  List: async (page: string): Promise<{ data: IStarship.IStarshipList }> => {
    const result = await Http.GET(Endpoints.Starships + page);
    return result;
  },
  Search: async (text: string): Promise<{ data: IStarship.IStarshipList }> => {
    const result = await Http.GET(Endpoints.SearchStarships + text);
    return result;
  },
  GetByUrl: async (url = ""): Promise<{ data: IStarship.IStarshipList }> => {
    console.log(url);

    const result = await Http.GET(url);
    return result;
  },
};
