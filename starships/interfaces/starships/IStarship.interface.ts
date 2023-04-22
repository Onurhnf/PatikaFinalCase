export namespace IStarship {
  export interface IStarshipResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: IStarshipDetail[];
  }
  export interface IStarshipList extends Pick<IStarshipResponse, "results"> {}
  export interface IStarshipPagingProps
    extends Pick<IStarshipResponse, "next" | "previous"> {}

  export interface HomeProps
    extends Pick<IStarshipResponse, "results" | "next" | "previous"> {}
  export interface IStarshipCardProps {
    title: string;
    model: string;
    imageUrl?: string;
    rating: string;
    id?: string;
  }

  export interface IStarshipDetail {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    hyperdrive_rating: string;
    mGLT: string;
    starship_class: string;
    pilots: string[];
    films: string[];
    created: string;
    edited: string;
    url: string;
    imageUrl?: string;
    id?: string;
  }
}
