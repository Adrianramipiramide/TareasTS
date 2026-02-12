import Usuario from "./Usuario";
export default interface UsaurioRepository{
    registrarUsuario(email:String,password:String): Promise<void>
    findByEmail (email:String):Promise<Usuario | null>
}