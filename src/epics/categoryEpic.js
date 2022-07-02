import { map } from "rxjs"
import { ofType } from "redux-observable"

export default function(action$){
    ofType(action$),
    action$.pipe(
        map(action=>console.log("action"))
    )
}