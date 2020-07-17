import { $ } from 'taiko';

export const getSearchForm = () => $('form[name="f"]')
export const getSearchInputField = () => $('input[name="q"]');
export const getSearchResultContainer = () => $('div[id="search"]')
export const getSearchResults = () => $('div[class="g"]')
