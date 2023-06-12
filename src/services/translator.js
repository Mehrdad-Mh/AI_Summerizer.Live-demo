import {createApi , fetchBaseQuery} from "@reduxjs/toolkit/query/react";


const rapidApiKey = import.meta.env.RAPID_API_TRANSLATOR_KEY;

export const translatorApi = createApi({
    reducerPath : "translatorApi",
    baseQuery : fetchBaseQuery({
     baseUrl : 'https://rapid-translate-multi-traduction.p.rapidapi.com/',
     prepareHeaders: (headers) =>{
        headers.set("X-RapidAPI-Key" , "4d4f4961d5msh232f5d318d03859p11b49fjsnd572993b5eda");
        headers.set("X-RapidAPI-Host" , "rapid-translate-multi-traduction.p.rapidapi.com");

        return headers;
     },
     body: {
        from: 'en',
        to: 'fa',
        q: 'Hello ! Rapid Translate Multi Traduction'
      }
    }),
    endpoints : (builder) => ({
       getTranslated : builder.query({
        query : (params) => `/t?url=${encodeURIComponent(params.translatorApi)}`,
       })
    })
});


export const {useLazyGetTranslatedQuery} = translatorApi