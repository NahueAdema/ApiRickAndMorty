import "./style.css";
import { PersonajeController } from "./controllers/personajeController";

const cotrolador = new PersonajeController();

const form = document.getElementById("formularioDeBusqueda") as HTMLFormElement;
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const input = document.getElementById(
    "nombreDePersonaje"
  ) as HTMLInputElement;
  const nombre = input.value.trim();
  if (nombre) {
    await cotrolador.busquedaDePersonaje(nombre);
  }
});
