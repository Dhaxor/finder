import { ActionTypes } from '../action-types';

interface SearchRepoType {
	type: ActionTypes.SEARCH_REPOSITORIES,
}

interface SearchRepoSuccessType {
	type: ActionTypes.SEARCH_REPOSITORIES_SUCCESS,
	payload?: string[]
}

interface SearchRepoFailureType {
	type: ActionTypes.SEARCH_REPOSITORIES_FAILURE,
	payload: string,
}

export type Action = SearchRepoType | SearchRepoSuccessType | SearchRepoFailureType;