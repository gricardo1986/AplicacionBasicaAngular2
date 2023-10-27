import { createReducer, on } from '@ngrx/store';
import * as VoteActions from './vote.actions';

export interface VoteItem {
  name: string;
  votes: number;
}

export interface VoteState {
  items: VoteItem[];
}

export const initialState: VoteState = {
  items: [
    { name: 'Option 1', votes: 0 },
    { name: 'Option 2', votes: 0 },
  ],
};

// Mueve la función de búsqueda de índice al interior del reducer
const findItemIndex = (state: VoteItem[], name: string) => state.findIndex(item => item.name === name);

export const voteReducer = createReducer(
  initialState,
  on(VoteActions.addVote, (state, { name }) => {
    const itemIndex = findItemIndex(state.items, name);

    if (itemIndex !== -1) {
      // El elemento ya existe, actualiza los votos sumando 1
      const updatedItems = state.items.map((item, index) => {
        if (index === itemIndex) {
          return { ...item, votes: item.votes + 1 };
        } else {
          return item;
        }
      });

      return {
        ...state,
        items: updatedItems,
      };
    } else {
      // El elemento no existe, agrégalo con 1 voto
      const newItem: VoteItem = { name, votes: 1 };
      const updatedItems = [...state.items, newItem];

      return {
        ...state,
        items: updatedItems,
      };
    }
  }),
  on(VoteActions.removeVote, (state, { name }) => {
    const itemIndex = findItemIndex(state.items, name);

    if (itemIndex !== -1) {
      // El elemento ya existe, actualiza los votos restando 1, con un mínimo de 0 votos
      const updatedItems = state.items.map((item, index) => {
        if (index === itemIndex) {
          return { ...item, votes: Math.max(item.votes - 1, 0) };
        } else {
          return item;
        }
      });

      return {
        ...state,
        items: updatedItems,
      };
    }

    // Si el elemento no existe, no se hace ningún cambio en el estado
    return state;
  })
);
