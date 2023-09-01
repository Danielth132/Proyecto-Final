import { Router } from "express";
import { authToken,passportCall,authorization, } from "../utils.js";
import {
  login,
  createUser,
  getAllUsers,
  deleteUsersInactivos,
  getAllUsersAdmin,
  deleteUser,
  updateUserById
} from "../controllers/users.controller.js";
import userRegisterDTO from "../dto/user.register.dto.js";

const router = Router();

router.get("/", getAllUsers);

router.post("/register", userRegisterDTO, createUser);

router.get("/:userId", login);

// rutas nuevas
router.get("/menu/admin",passportCall("jwt"), authorization("admin"), getAllUsersAdmin);

// Estas rutas solo funcionan desde postman
router.delete("/delete",passportCall("jwt"), authorization("admin"), deleteUsersInactivos);

router.delete("/deleteOne/:uid",passportCall("jwt"), authorization("admin"), deleteUser);

router.put("/modificar/:uid",passportCall("jwt"), authorization("admin"), updateUserById);

// router.get("/", authToken, getAllUsers);

// router.get("/:userId", authToken, ingreso);

export default router;
