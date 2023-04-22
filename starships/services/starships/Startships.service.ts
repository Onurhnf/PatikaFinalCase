import { Endpoints } from "@/enums/api/Endpoints.enum";
import { IStarship } from "@/interfaces/starships/IStarship.interface";
import Http from "@/utility/Http";

export const StarshipsService = {
  /**
   * @returns Starship List
   */
  List: async (
    query: string
  ): Promise<{ data: IStarship.IStarshipResponse }> => {
    const result = await Http.GET(Endpoints.Starships + query);
    return result;
  },
  /**
   *
   * @param text
   * @returns Searched starship list
   */
  // Search: async (text: string): Promise<{ data: IStarship.IStarshipList }> => {
  //   const result = await Http.GET(Endpoints.SearchStarships + text);
  //   return result;
  // },
  /**
   *
   * @param url
   * @returns what url return (starships in this case)
   */
  // GetByUrl: async (url = ""): Promise<{ data: IStarship.IStarshipList }> => {
  //   const result = await Http.GET(url);
  //   return result;
  // },
  /**
   *
   * @param id
   * @returns starship detail
   */

  GetDetail: async (
    id: string
  ): Promise<{ data: IStarship.IStarshipDetail }> => {
    const result = await Http.GET(Endpoints.Starships + id);
    return result;
  },
};
