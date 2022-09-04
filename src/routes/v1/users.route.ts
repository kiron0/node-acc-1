import { Router } from "express";
import { userRouter } from "../../Controllers/users.controller";

const router: Router = Router();

// here will be all the routes
//  @route get / a welcome message
router.get("/", userRouter.welcomeMessage);

// @route  get random user user/random
router.get("/random", userRouter.getRandomUser);

// @route  get all users user/all
router.get("/all", userRouter.getAllUsers);

// @route  create user user/save
router.post("/save", userRouter.saveUser);

// @route  get user by id user/:id
router.get("/:id", userRouter.getUserById);

// @route  update user by id user/:id
router.patch("/patch/:id", userRouter.updateUser);

// @route  delete user by id user/:id
router.delete("/delete/:id", userRouter.deleteUser);

// @route  bulk update user user/bulk-update
router.patch("/bulk-update", userRouter.bulkUpdate);

export default router;
