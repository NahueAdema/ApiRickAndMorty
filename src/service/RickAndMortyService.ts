import { Personaje } from "../interface/personaje";

export class RickAndMortyService {
  private apiUrl: string = "https://rickandmortyapi.com/api/character";

  async getPersonajeName(name: string): Promise<Personaje | null> {
    try {
      const response = await fetch(`${this.apiUrl}/?name=${name}`);
      const data = await response.json();
      return (data.results[0] as Personaje) || null;
    } catch (error) {
      console.log("Error al encontrar el personaje");
      return null;
    }
  }
}
