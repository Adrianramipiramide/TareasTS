import Tarea from "./Tarea"
export default interface TareasRepository {

    getAll(): Promise<Tarea[]>
    crearTarea(tarea:Tarea): Promise<Tarea>

}