import ACTIONS from './action';

const MAX_CHARACTER = 10;

export const reducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.ADD_DIGIT:
			if (state.overwrite) {
				return {
					...state,
					currentVal: action.payload,
					overwrite: false,
				};
			}
			if (state.currentVal.length === MAX_CHARACTER) return state;
			if (action.payload === '0' && state.currentVal === '0') return state;
			if (action.payload === '.' && state.currentVal.includes('.')) {
				return state;
			}
			return {
				...state,
				currentVal: `${state.currentVal}${action.payload}`,
			};

		case ACTIONS.CHOOSE_OPERATION:
			if (!state.currentVal && !state.prevVal) {
				return state;
			}

			if (!state.prevVal) {
				return {
					...state,
					operation: action.payload,
					prevVal: state.currentVal,
					currentVal: '',
				};
			}

			if (!state.currentVal) {
				return {
					...state,
					operation: action.payload,
				};
			}

			return {
				...state,
				prevVal: evaluate(state),
				operation: action.payload,
				currentVal: '',
			};

		case ACTIONS.EVALUATE:
			if (!state.operation || !state.currentVal || !state.prevVal) {
				return state;
			}

			return {
				...state,
				overwrite: true,
				prevVal: '',
				operation: '',
				currentVal: evaluate(state),
			};

		case ACTIONS.CLEAR:
			return { currentVal: '', prevVal: '', operation: '' };

		case ACTIONS.DELETE_DIGIT:
			if (state.overwrite) {
				return {
					...state,
					overwrite: false,
					currentVal: '',
				};
			}
			if (!state.currentVal) return state;
			if (state.currentVal.length === 1) {
				return {
					...state,
					currentVal: '',
				};
			}

			return {
				...state,
				currentVal: state.currentVal.slice(0, -1),
			};

		default:
			return;
	}
};

const evaluate = ({ currentVal, prevVal, operation }) => {
	const prev = parseFloat(prevVal);
	const current = parseFloat(currentVal);
	if (isNaN(prev) || isNaN(current)) return '';
	let computation = '';
	switch (operation) {
		case '+':
			computation = prev + current;
			break;
		case '-':
			computation = prev - current;
			break;
		case '÷':
			computation = prev / current;
			break;
		case 'x':
			computation = prev * current;
			break;
		default:
			return;
	}

	return computation.toString();
};
