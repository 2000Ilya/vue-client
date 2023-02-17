import { Response } from "./types";

async function apiCharacterRequest(page?: number): Promise<Response> {
  try {
    const url = `https://rickandmortyapi.com/api/character${
      page ? `?page=${page}` : ""
    }`;
    const response = await fetch(url);

    if (response.ok) {
      return {
        success: true,
        data: await response.json(),
      };
    }

    return {
      success: false,
      data: await response.json(),
    };
  } catch (error) {
    return {
      success: false,
      data: error,
    };
  }
}

export default apiCharacterRequest;
