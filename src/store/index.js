import { createStore } from "vuex"
import * as state from "./state"
import * as actions from "./actions"
import * as getters from "./getters"
import * as mutations from "./mutations"


const store = createStore({
    state,
    actions,
    getters,
    mutations 
})

export default store