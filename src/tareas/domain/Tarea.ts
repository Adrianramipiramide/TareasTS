import Usuario from "../../usuarios/domain/Usuario";
export default interface Tarea{

    id?: Number;
    nombre : String;
    completado : Boolean;
    usuario : Usuario;
}