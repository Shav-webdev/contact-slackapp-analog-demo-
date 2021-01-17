module.exports = {
  roles: {
    admin: "admin",
    user: "user",
    company: "company",
  },
  types: {
    validationError: "ValidationError",
  },
  validation: {
    nameMinMaxLength: "Full name should have min and max length between 2-50",
    nameMinLength: "Full name must be at least 2 characters.",
    nameMaxLength: "Full name be less than 50 characters.",
    nameRequired: "Full name field is required!",
    nameRegexp: "Full name field is not valid!",
    lastNameMinLength: "Last name must be at least 2 characters.",
    lastNameMaxLength: "Last name must be less than 20 characters.",
    lastNameRequired: "Last name field is required!",
    lastNameRegexp: "Last name field is not valid!",
    birthdayMin: "Last date is not valid!",
    birthdayMax: "Future date is not valid!",
    birthdayRequired: "Birthday field is required!",
    passwordMinMaxLength: "Password should have min and max length between 8-32",
    passwordMinLength: "Password must be at least 2 characters.",
    passwordMaxLength: "Password must be less than 32 characters.",
    passwordRegexp: "Password field is not valid!",
    passwordRequired: "Password field is required!",
    emailRegexp: "Email field is not valid!",
    workNameMinLength: "Workspace name must be at least 2 characters.",
    workNameMaxLength: "Workspace name be less than 30 characters.",
    workNameRequired: "Workspace name field is required!",
    subDomainMinLength: "Subdomain must be at least 2 characters.",
    subDomainMaxLength: "Subdomain be less than 30 characters.",
    subDomainRequired: "Subdomain field is required!",
  },
  emails: {
    accountCreated: "Account successfully created!",
  },
  messages: {
    errorMessage: "Something went wrong, try later",
    errorAuthFailed: "Auth failed: email or password is incorrect",
    errorAlreadyExists: "Email already exists",
    successPasswordChanged: "Password has changed",
    successAuthMessage: "Auth successful",

    successUserCreated: "User successfully created",
    successUserEdited: "User has been edited",
    successUserDeleted: "User has been deleted",

    successWorkspaceCreated: "Workspace successfully created",
    successWorkspaceEdited: "Workspace has been edited",
    successWorkspaceDeleted: "Workspace has been deleted",
    successWorkspacesFounded: "Workspaces founded",
    successWorkspaceFounded: "Workspace founded",
    errorWorkspacesCantGet: "Can't get workspaces",
    errorWorkspaceCantGet: "Can't get workspace",
    errorWorkspaceCantUpdate: "Can't update workspace",

  },
  selectTypes: {
    userGetAll:
      "firstName lastName email phoneNumber approved avatar createdTime",
    userGetById: "firstName lastName email phoneNumber role approved avatar",
    companyGetAll:
      "name email phoneNumber taxNumber address activity approved avatar amount createdTime",
    companyGetById:
      "name email phoneNumber taxNumber address activity approved avatar amount",
  }
};
