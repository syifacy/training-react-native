export const fetchChannelNews = () => ({
    type: 'FETCH_NEWS_CHANNEL_REQUESTED'
});

export const fetchListNews = (params) =>({
    type: 'FETCH_NEWS_LIST_REQUESTED',
    params
});

export const reset = () =>({
    type:'RESET'
})

export const resetMessage = () =>({
    type:'RESET_MESSAGE'
})