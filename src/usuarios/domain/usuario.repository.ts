import Usuario from "./Usuario";
export default interface UsaurioRepository{
    registrarUsuario(email:String,password:String): Promise<void>
    loginPorEmail(email:String):Promise<Usuario | null>
}