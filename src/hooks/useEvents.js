import { useReducer } from 'react';

export function useEvents() {
  /* Setting the initial state of the store. */
  const initialState = {
    openModal: { modalInfo: {}, modalState: false },
  };

  /* An object that contains the action types that are being used in the reducer. */
  const actionTypes = {
    click_modal: 'CLICK_MODAL',
  };

  /**
   * If the action type is click_modal, then return a new state object with the openModal property set to
   * the payload of the action.
   * @param state - The current state of the store.
   * @param action - This is the action object that is dispatched.
   * @returns The state is being returned.
   */
  const reducer = (state, action) => {
    switch (action.type) {
      case actionTypes.click_modal:
        return {
          ...state,
          openModal: action.payload,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  /**
   * It takes an object with a modalChild and modalInfo property,
   * and then dispatches an action with a
   */
  const handlerModal = ({ modalInfo = {} } = {}) => {
    dispatch({
      type: actionTypes.click_modal,
      payload: {
        modalInfo,
        modalState: !state.openModal.modalState,
      },
    });
  };

  return {
    stateEvents: state,
    handlerModal,
  };
}
