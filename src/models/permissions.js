
// actions
var actions = {
    USER_CREATE : "user_create",
    USER_EDIT : "user_edit",
    USER_DELETE : "user_delete",
    USER_SUSPENT : "user_suspent",
    USER_PASSWORD_RESET : "user_password_reset",
    USER_CLIENT_ACCESS : "user_client_access",
    PROFILE_CREATE : "profile-create",
    PROFILE_EDIT : "profile-edit",
    ENTERPRISE_ACCESS : "enterprise-access",
    ENTERPRISE_CREATE : "enterprise-create",
    ENTERPRISE_EDIT_LOGO : "enterprise-edit-logo"
}   

//status
var status = {
    ENABLED : "enabled",
    DISABLED : "disabled",
    PASSWORD_CHANGED : "password-changed"
}

module.exports = ({actions,status});

