import * as types from './mutation-types';
import { SINGLE_PAGE_NUM } from '../config/constants';

const mutations = {
    [types.SET_ALL_ARTICLES](state, allArticles){
        state.allArticles = allArticles;
    },
    [types.SET_FILTER_ARTICLES](state, filterArticles) {
        state.filterArticles = filterArticles;
        state.displayArticles = state.filterArticles.slice(0,SINGLE_PAGE_NUM);
    },
    [types.SET_DISPLAY_ARTICLES](state, num) {
        state.displayArticles = state.filterArticles.slice((num - 1) * SINGLE_PAGE_NUM, num * SINGLE_PAGE_NUM);
    }
}

export default mutations;