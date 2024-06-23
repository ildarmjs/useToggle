import { useReducer } from 'react';

type Action =
	| { type: 'TOGGLE_VALUE' }
	| { type: 'SET_VALUE'; payload: string };

type State = {
	values: string[];
	index: number;
};

function toggleReducer(state: State, action: Action): State {
	switch (action.type) {
		case 'TOGGLE_VALUE':
			return {
				...state,
				index: (state.index + 1) % state.values.length,
			};
		case 'SET_VALUE':
			const newIndex = state.values.indexOf(action.payload);
			return newIndex !== -1 ? { ...state, index: newIndex } : state;
		default:
			return state;
	}
}

export function useToggle(initialValues: string[] = ['true', 'false']): [string, () => void] {
	const [state, dispatch] = useReducer(toggleReducer, {
		values: initialValues,
		index: 0,
	});

	const currentValue = state.values[state.index];

	function toggle(value?: string) {
		dispatch(
			value
				? { type: 'SET_VALUE', payload: value }
				: { type: 'TOGGLE_VALUE' }
		);
	}

	return [currentValue, toggle];
}







