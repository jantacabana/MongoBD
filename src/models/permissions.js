
// actions
const actions = {
    USER_SEARCH : "user_search",
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
    ENTERPRISE_EDIT_LOGO : "enterprise-edit-logo",
    PRODUCT_PHISICAL_SEARCH : "product_phisical_search",
    PRODUCT_PHISICAL_CREATE : "product_phisical_create",
    PRODUCT_PHISICAL_EDIT : "product_phisical_edit",
    PRODUCT_PHISICAL_DELETE : "product_phisical_delete"
};

//status
const status = {
    ENABLED : "enabled",
    DISABLED : "disabled",
    PASSWORD_CHANGED : "password-changed"
};

module.exports = {actions, status};

