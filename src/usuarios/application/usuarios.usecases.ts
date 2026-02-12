import UsaurioRepository from "../domain/usuario.repository";
import bcrypt, { compare } from "bcrypt";
import Auth, { createToken } from "../../../src/contex/auth";

export default class UsuariosUseCases{
        constructor(private repository: UsaurioRepository){}

        async registro(email:String,password:String):Promise<void>{
            
               if(!email.includes("@")){
            throw new Error("El email no es correcto")
        }
            
            await this.repository.registrarUsuario(email,password);
        }

        async login(email:String,password:String){
            const usuario = await this.repository.findByEmail(email);

         
            if(usuario && usuario.password && (await compare(password.toString(),usuario.password.toString()))){
                      const token = createToken(usuario);
                      return { usuario: { email: usuario.email }, token };
            }
            return false;
        }
}