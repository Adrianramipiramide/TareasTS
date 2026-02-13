import Usuario from "../../domain/Usuario";
import UsaurioRepository from "../../domain/usuario.repository";
import executeQuery from "../../../contex/postgres.connector.ts";
export default class UsuariosRepositoryPostgres implements UsaurioRepository{
    
    async registrarUsuario(email: String, password: String): Promise<void> {
        const query = `INSERT INTO usuarios (email, password) VALUES ('${email}', '${password}')`;
         const result: any[] = await executeQuery(query);
        
    }

    async findByEmail(email: String): Promise<Usuario | null> {
         const query = `SELECT * FROM usuarios WHERE email = '${email}'`;
         const result = await executeQuery(query);
             if (!result) {
      throw new Error("Error guardando usuario");
    }
         return null;
    }
    
}