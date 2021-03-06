import { ActionTypes } from '../action-types';
import { Action } from '../actions';

interface RepositoriesType {
	loading: boolean,
	error: string | null,
	data: string[] | undefined,
}

const repositoriesReducer = (state: RepositoriesType, action: Action): RepositoriesType => {

	switch(action.type) {
		case ActionTypes.SEARCH_REPOSITORIES:
			return { loading: true, error: null, data: []}
		case ActionTypes.SEARCH_REPOSITORIES_SUCCESS:
			return { loading: false, error: null, data: action.payload}
		case ActionTypes.SEARCH_REPOSITORIES_FAILURE:
			return { loading: false, error: action.payload, data: []}
		default: 
			return state;
	}
}

export default repositoriesReducer;