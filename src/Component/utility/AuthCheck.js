export const authCheck = () => {
    try {
        const id = JSON.parse(localStorage.getItem("logData")).id
        const accountStatus = JSON.parse(localStorage.getItem("logData")).accountStatus
        const key = JSON.parse(localStorage.getItem("logData")).key
        const roleId = JSON.parse(localStorage.getItem("logData")).role_id
        const permissionFromLogData = JSON.stringify(JSON.parse(localStorage.getItem("logData")).permission)
        const featuresFromLogData = JSON.stringify(JSON.parse(localStorage.getItem("logData")).features)

        const permission = localStorage.getItem("permission")
        const feature = localStorage.getItem("feature")
        const token = localStorage.getItem("token")

        if (permissionFromLogData == permission && featuresFromLogData == feature) {
            if (id.length != 0 &&
                accountStatus.length != 0 &&
                key.length != 0 &&
                roleId.length != 0 &&
                permission.length != 0 &&
                feature.length != 0 &&
                token.length != 0) {

                const payload = {
                    userid: id,
                    account_status: accountStatus,
                    key: key,
                    role_id: roleId,
                    all_permission: permission,
                    all_feature: feature,
                    token: token
                }

                return payload

            } else {
                return false
            }
        } else {
            return false
        }


    } catch (e) {
        return false
    }
}