import {authCheck} from "./AuthCheck";

export const shopManagementFeatureCheck = () => {
    try {
        const feature = JSON.parse(authCheck().all_feature)[0]
        

        if (feature.super_shop == "1") {
            return true
        } else {
            return false
        }


    } catch (e) {
        return false
    }
}