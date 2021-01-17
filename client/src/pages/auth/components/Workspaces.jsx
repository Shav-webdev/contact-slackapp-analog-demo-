import React, { useEffect, useMemo, useState } from "react";
import BaseModal from "../../../components/modal/BaseModal";
import AddEditWorkspace from "./AddEditWorkspace";
import { Button, Table, Form } from "antd";
import classes from "../AuthPage.module.scss";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { withNamespaces } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  authCreateWorkspaceAction,
  authDeleteWorkspaceAction,
  authGetWorkspacesAction,
  authUpdateWorkspaceAction,
} from "../../../redux/actions/auth.actions";

const Workspaces = ({ t }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isConfirmModalVisible, setIsConfirmModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [confirmForDeletePromId, setConfirmForDeletePromId] = useState("");
  const [currentEditableData, setCurrentEditableData] = useState({
    id: "",
    name: "",
    subDomain: "",
  });

  const editFormRef = React.createRef();
  const dispatch = useDispatch();
  const workspaces = useSelector(state => state.workspace.workspaces);
  const token = useSelector(state => state.auth.token);
  const params = {
    token,
  };

  /**
   * get first time and on of unmount component
   */
  useEffect(() => {
    dispatch(authGetWorkspacesAction(params));
  }, []);

  const createWorkspace = body => {
    const data = {
      body,
      token,
    };
    dispatch(authCreateWorkspaceAction(data));
    closeCreateWorkspaceModal();
  };

  const editWorkspace = (body, param) => {
    console.log("editWorkspace body", body);
    const data = {
      body,
      param,
      token,
    };
    dispatch(authUpdateWorkspaceAction(data));
    closeEditModal();
  };

  const columns = [
    {
      title: t("Author"),
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: t("Author email"),
      dataIndex: "email",
      key: "email",
    },
    {
      title: t("Workspace name"),
      dataIndex: "name",
      key: "name",
    },
    {
      title: t("Subdomain"),
      dataIndex: "subDomain",
      key: "subDomain",
    },
    {
      title: t("Actions"),
      key: "actions",
      dataIndex: "_id",
      render: (id, workspace) => {
        console.log("render btn id", id);
        console.log("render btn workspace", workspace);
        return (
          <div className={classes["actions-btn-wrapper"]}>
            <Button
              style={{ marginRight: "1rem" }}
              onClick={() => openEditModal(workspace)}
              type="primary"
              icon={<EditOutlined />}
            />
            <Button
              onClick={() => openConfirmModal(workspace.id)}
              type="primary"
              icon={<DeleteOutlined />}
            />
          </div>
        );
      },
    },
  ];

  const openEditModal = workspace => {
    console.log("openEditModal workspace", workspace);
    const { subDomain, name, id, userId } = workspace;
    setCurrentEditableData({
      id,
      name,
      subDomain,
      userId,
    });
    setIsEditModalVisible(true);
  };
  const closeEditModal = () => {
    setIsEditModalVisible(false);
  };
  const editWorkspaceModalProps = () => {
    return {
      visible: isEditModalVisible,
      handleOk: editWorkspace,
      handleCancel: closeEditModal,
      title: t("Edit workspace"),
      okText: t("Edit"),
      cancelText: t("cancel"),
      okBtnHtmlType: "submit",
      formId: "edit-workspace",
      footer: null,
    };
  };

  const openConfirmModal = id => {
    console.log("openConfirmModal id", id);
    setConfirmForDeletePromId(id);
    setIsConfirmModalVisible(true);
  };
  const closeConfirmModal = () => {
    setIsConfirmModalVisible(false);
  };
  const handleConfirmDelete = () => {
    const data = {
      workspaceId: confirmForDeletePromId,
      token,
    };
    console.log("handleConfirmDelete data", data);
    dispatch(authDeleteWorkspaceAction(data));
    closeConfirmModal();
  };
  const deleteWorkspaceModalProps = () => {
    return {
      visible: isConfirmModalVisible,
      handleOk: handleConfirmDelete,
      handleCancel: closeConfirmModal,
      title: t("Delete workspace"),
      okText: t("Delete"),
      cancelText: t("cancel"),
      okBtnHtmlType: "button",
      formId: null,
    };
  };

  const openCreateWorkspaceModal = () => {
    setIsModalVisible(true);
  };
  const closeCreateWorkspaceModal = () => {
    setIsModalVisible(false);
  };
  const createWorkspaceModalProps = () => {
    return {
      visible: isModalVisible,
      handleOk: createWorkspace,
      handleCancel: closeCreateWorkspaceModal,
      title: t("Create workspace"),
      okText: t("create"),
      cancelText: t("cancel"),
      okBtnHtmlType: "submit",
      formId: "create-workspace",
      footer: null,
    };
  };

  const filterWorkspaces = useMemo(() => {
    let result = [...workspaces];
    result = result.map(el => {
      if (el && el.User) {
        const { fullName, email } = el.User;
        el.fullName = fullName ?? "";
        el.email = email ?? "";
      }
      el.key = el.id;
      return el;
    });

    return result;
  }, [workspaces]);


  return (
    <div className={classes["workspace-wrapper"]}>
      <div>
        <Button type="primary" onClick={openCreateWorkspaceModal}>
          {t("New workspace")}
        </Button>
      </div>
      <div className={classes["workspace-table-wrapper"]}>
        <Table columns={columns} dataSource={filterWorkspaces} />
      </div>

      <BaseModal {...createWorkspaceModalProps()}>
        {isModalVisible && (
          <AddEditWorkspace
            type="create"
            handleCancel={closeCreateWorkspaceModal}
            handleOk={createWorkspace}
            t={t}
          />
        )}
      </BaseModal>

      <BaseModal {...editWorkspaceModalProps()}>
        {isEditModalVisible && (
          <AddEditWorkspace
            type="edit"
            t={t}
            currentEditableData={currentEditableData}
            handleCancel={closeCreateWorkspaceModal}
            handleOk={editWorkspace}
            formRef={editFormRef}
          />
        )}
      </BaseModal>
      <BaseModal {...deleteWorkspaceModalProps()}>
        {t("Are you sure to delete workspace")}
      </BaseModal>
    </div>
  );
};

export default React.memo(withNamespaces()(Workspaces));
