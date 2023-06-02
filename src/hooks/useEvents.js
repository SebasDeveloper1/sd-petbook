import { useReducer } from 'react';

export function useEvents() {
  /* Definir el estado inicial del store. */
  const initialState = {
    openModal: { modalInfo: {}, modalState: false },
  };

  /* Definir los tipos de acciones que se utilizan en el reducer. */
  const actionTypes = {
    CLICK_MODAL: 'CLICK_MODAL',
  };

  /**
   * El reducer actualiza el estado basado en las acciones que se envían.
   * Si el tipo de acción es CLICK_MODAL, se devuelve un nuevo objeto de estado con la propiedad openModal
   * establecida según el valor del campo payload de la acción.
   * @param state - El estado actual del store.
   * @param action - El objeto de acción que se despacha.
   * @returns El nuevo estado.
   */
  const reducer = (state, action) => {
    switch (action.type) {
      case actionTypes.CLICK_MODAL:
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
   * Esta función toma un objeto con las propiedades modalInfo y modalState,
   * y luego despacha una acción con el tipo CLICK_MODAL y el campo payload correspondiente.
   */
  const handlerModal = ({ modalInfo = {} } = {}) => {
    dispatch({
      type: actionTypes.CLICK_MODAL,
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
