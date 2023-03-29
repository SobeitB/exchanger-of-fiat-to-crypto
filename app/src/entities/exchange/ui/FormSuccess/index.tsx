import {useStore} from "effector-react";

import {$requestPurchase, succcessPurchase} from "../../model";


export const FormSuccessPurchase = () => {
    const state_request = useStore($requestPurchase);

    return(
        <div >
            <p>{state_request!.to_card}</p>
            <p>{state_request!.request_page}</p>

            <button onClick={succcessPurchase(state_request!.request_page)}>
                Submit
            </button>
        </div>
    )
}