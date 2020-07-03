import * as Routes from './routes'

export default {
    SHOULD_LOGGEDIN:{
        verifier:(authUser)=>!!authUser,
        ifNot:Routes.LOGIN
    },
    SHOULD_NOT_LOGGEDIN:{
        verifier:(authUser)=>!authUser,
        ifNot:Routes.HOME
    },
    ADMIN:{
        verifier:(authUser)=>authUser.isAdmin,
        ifNot:Routes.HOME
    }
}