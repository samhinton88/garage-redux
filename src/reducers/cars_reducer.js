// import { FETCH_CARS, CAR_POSTED, FETCH_CAR } from '../actions';
// import not needed.
export default function(state = [], action) {
	switch (action.type) {
		case 'FETCH_CARS':
			return action.payload;
		case 'CAR_POSTED': {
			const copiedState = state.slice(0);
			copiedState.push(action.payload);
			return copeidState;
		}
	default:
		return state;
	}
}

//mistakes
// case FETCH_CARS: .. missing ''
