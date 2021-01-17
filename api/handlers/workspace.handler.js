const Workspace = require("../models/WorkspaceModel");
const User = require("../models/UserModel");
const { messages } = require("../../utils/constants");
const { errorMessage } = messages;

module.exports.getWorkspaces = async (req, res) => {
  try {
    await Workspace.findAll({
      include: [{ model: User, attributes: ["fullName", "email"] }],
    })
      .then(workspaces => {
        res.status(200).send({
          workspaces,
          messages: messages.successWorkspacesFounded,
        });
      })
      .catch(err => {
        console.log(`${messages.errorWorkspacesCantGet} error`, err);
        res.status(403).send({ message: messages.errorWorkspacesCantGet });
      });
  } catch (e) {
    console.log(e.message || "Something went wrong!");
  }
};

module.exports.createWorkspace = async (req, res) => {
  try {
    const userId = req.body.userId;
    const name = req.body.name;
    const subDomain = req.body.subDomain;

    const workspace = await Workspace.findOne({
      where: {
        name,
      },
    })
      .then(res => {
        console.log("res", res);
      })
      .catch(e => {
        console.log("e", e);
      });

    if (!workspace) {
      await Workspace.create({
        userId,
        name,
        subDomain,
      })
        .then(() => {
          this.getWorkspaces(req, res);
        })
        .catch(err => {
          console.log("error", err);
          res.status(404).send({
            message: errorMessage,
          });
        });
    } else {
      console.log("workspace", workspace);
    }
  } catch (e) {
    console.log(e.message || "Something went wrong!");
  }
};

module.exports.updateWorkspaceById = async (req, res) => {
  try {
    const userId = req.body.userId;
    const name = req.body.name;
    const subDomain = req.body.subDomain;
    const id = req.params.id;
    await Workspace.update({ userId, name, subDomain }, { where: { id } })
      .then(() => this.getWorkspaces(req, res))
      .catch(err => {
        res.status(403).send({
          message: messages.errorWorkspaceCantUpdate,
          data: err,
        });
      });
  } catch (e) {
    console.log(e.message || messages.errorMessage);
  }
};

module.exports.deleteWorkspaceById = async (req, res) => {
  try {
    if (req.params && req.params.id) {
      const { id } = req.params;
      await Workspace.destroy({
        where: {
          id,
        },
      })
        .then(() => this.getWorkspaces(req, res))
        .catch(err => {
          console.log("Delete error", err);
          res.status(404).send({ message: messages.errorMessage });
        });
    }
  } catch (e) {
    console.log(e.message || "Something went wrong!");
  }
};
