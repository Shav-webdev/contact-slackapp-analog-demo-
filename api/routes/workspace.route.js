const { Router } = require("express");
const router = Router();
const passport = require("passport");
const {
  createWorkspace,
  getWorkspaces,
  updateWorkspaceById,
  deleteWorkspaceById,
} = require("../handlers/workspace.handler");

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  createWorkspace
);

router.get(
  "/all",
  passport.authenticate("jwt", { session: false }),
  getWorkspaces
);
router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  updateWorkspaceById
);

router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  deleteWorkspaceById
);


module.exports = router;
