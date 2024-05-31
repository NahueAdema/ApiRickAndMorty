import { RickAndMortyService } from "../service/RickAndMortyService";
import { Personaje } from "../interface/personaje";

export class PersonajeController {
  private servicio: RickAndMortyService;

  constructor() {
    this.servicio = new RickAndMortyService();
  }

  async busquedaDePersonaje(name: string): Promise<void> {
    const personaje = await this.servicio.getPersonajeName(name);
    if (personaje) {
      this.mostrarPersonaje(personaje);
    } else {
      this.mostrarError(
        `El personaje ${personaje} no existe o no se encontro :( `
      );
    }
  }
  mostrarPersonaje(personaje: Personaje) {
    const contedorDePersonaje = document.getElementById(
      "personaje"
    ) as HTMLDivElement;
    contedorDePersonaje.innerHTML = `
        <h2>${personaje.name}</h2>
        <img src="${personaje.image}" alt="${personaje.name}">
        <p>Estado: ${personaje.status}</p>
        <p>Especie: ${personaje.species}</p>
        <p>Genero: ${personaje.gender}</p>
        <p>Origen: ${personaje.origin.name}</p>
        <p>Creado: ${personaje.created}</p>
        `;
  }
  mostrarError(mensaje: string): void {
    const contedorDePersonaje = document.getElementById(
      "personaje"
    ) as HTMLDivElement;
    contedorDePersonaje.innerHTML = `<p>${mensaje}<p>`;
  }
}
