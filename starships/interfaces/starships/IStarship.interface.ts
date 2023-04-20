export namespace IStarship {
  export interface IStarshipList {
    count: number;
    next: string | null;
    previous: string | null;
    results: StarshipDetail[];
    initialResults: StarshipDetail[];
  }
  export interface StarshipCardProps {
    title: string;
    model: string;
    imageUrl: string;
    rating: string;
  }

  export interface StarshipDetail {
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
    imageUrl: string;
  }
}
