import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./article";
import {translatorApi} from "./translator"

export const store = configureStore({
    reducer : {
        [articleApi.reducerPath] : articleApi.reducer,
        [translatorApi.reducerPath] : translatorApi.reducer
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware , translatorApi.middleware)
})