import { createContext, useContext, useReducer } from "react";

const initialState = {
  formOne: {},
  formTwo: {},
  formOneStatus: false,
  formTwoStatus: false,
};

const billsReducer = (state, action) => {
  switch (action.type) {
    case 'setFormOne':
      return {
        ...state,
        formOne: action.payload,
        formOneStatus: true,
      };
    case 'setFormTwo':
      return {
        ...state,
        formTwo: action.payload,
        formTwoStatus: true,
      };
    case 'clear':
      return initialState;
    default:
      return state;
  }
};

const BillsContext = createContext();

export const BillsContextProvider = (props) => {
  const [bills, dispatch] = useReducer(billsReducer, initialState);

  return (
    <BillsContext.Provider value={[bills, dispatch]}>
      {props.children}
    </BillsContext.Provider>
  );
};

export const useBillsValue = () => {
  const billsAndDispatch = useContext(BillsContext);
  return billsAndDispatch[0];
};

export const useBillsDispatch = () => {
  const billsAndDispatch = useContext(BillsContext);
  return billsAndDispatch[1];
};

export const setFormOne = (dispatch, total, days, units) => {
  dispatch({
    type: 'setFormOne',
    payload: {
      total,
      days,
      units,
    },
  });
};

export const setFormTwo = (dispatch, total, days, units) => {
  dispatch({
    type: 'setFormTwo',
    payload: {
      total,
      days,
      units,
    },
  });
};

export const clearForms = (dispatch) => {
  dispatch({
    type: 'clear',
  });
};

export default BillsContext;
