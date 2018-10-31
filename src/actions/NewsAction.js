import { actionChannel } from "redux-saga/effects";

export const fetchNews = (params) => ({
    type: 'FETCH_NEWS_REQUESTED',
    params
    
});
