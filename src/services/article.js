import {createApi , fetchBaseQuery} from "@reduxjs/toolkit/query/react";


const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

export const articleApi = createApi({
    reducerPath : "articleApi",
    baseQuery : fetchBaseQuery({
     baseUrl : 'https://article-extractor-and-summarizer.p.rapidapi.com/',
     prepareHeaders: (headers) =>{
        headers.set("X-RapidAPI-Key" , "4d4f4961d5msh232f5d318d03859p11b49fjsnd572993b5eda");
        headers.set("X-RapidAPI-Host" , "article-extractor-and-summarizer.p.rapidapi.com");

        return headers;
     }
    }),
    endpoints : (builer) => ({
       getSummary : builer.query({
        query : (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
       })
    })
});


export const {useLazyGetSummaryQuery} = articleApi