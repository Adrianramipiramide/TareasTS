import express, { Request, Response } from "express";
import UsuariosUseCases from "../../application/usuarios.usecases";
import UsuariosRepositoryPostgres from "../db/usuarios.postgres";


const router = express.Router();

const usuariosUseCases: UsuariosUseCases = new UsuariosUseCases(
  new UsuariosRepositoryPostgres()
);

router.post("/registro", async (req: Request, res: Response) => {
  try {
    await usuariosUseCases.registro(req.body.email, req.body.password);
    res.status(201).send({ message: "Usuario creado" });
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
});

router.post("/entrar", async (req: Request, res: Response) => {
   
   //introducir Auth
    try {
    await usuariosUseCases.login(req.body.email, req.body.password);
    res.status(201).send({ message: "Usuario logueado" });
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
});

export default router;