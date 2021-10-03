import Grupo from "./grupo.js";
import Persona from "./persona.js";

let g1 = new Grupo();

let juan = new Persona(1, "Juan");
let maria = new Persona(2, "Maria");
let fernando = new Persona(3, "Fernando");
let miguel = new Persona(4, "Miguel");
let sandra = new Persona(5, "Sandra");

g1.agregar(juan);
g1.agregar(maria);
g1.agregar(fernando);
g1.agregar(miguel);
g1.agregar(sandra);

g1.listar();
