import react, { useReducer } from "react";
import { ScreenReducer } from "./ScreenReducer.js";
import { ScreenContext } from "./ScreenContext.js";
import { CHANGE_SCREEN } from "../Type.js"


export const ScreenState = ({ children }) => {

	const (state, dispatch) = useReducer(ScreenReducer, null)
	const changeScreen = id => dispatch({ type: CHANGE_SCREEN, payload: id })

	return <ScreenContext.Provider value={{ changeScreen, todoId: state }}>{children}</ScreenContext.Provider>
}