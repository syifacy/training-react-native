import { actionChannel } from "redux-saga/effects";

export const fetchChannelNews = () => ({
    type: 'FETCH_NEWS_CHANNEL_REQUESTED'
});

export const fetchListNews = (params) =>({
    type: 'FETCH_NEWS_LIST_REQUESTED',
    params
});