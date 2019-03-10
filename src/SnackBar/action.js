import {SNACKBAR_CHANGE} from "./actionTypes";
export const snackbarChange=(open,msg,seconds)=>({
	type:SNACKBAR_CHANGE,
	open:open,
	msg:msg,
	seconds:seconds
})