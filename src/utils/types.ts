export type Character = {
  created: string;
  episode: string[];
  gender: string;
  id: number;
  image: string;
  location: { name: string; url: string };
  name: string;
  origin: { name: string; url: string };
  species: string;
  status: string;
  type: string;
  url: string;
};

export type DataInfo = {
  count: string;
  next: string;
  pages: number;
  prev: null | string;
};

export type Response =
  | {
      success: true;
      data: {
        info: DataInfo;
        results: Character[];
      };
    }
  | {
      success: false;
      data: Error;
    }
  | {
      success: false;
      data: any;
    };
