import {useStore} from "effector-react";
import {$requestPurchase} from "../model";
import {FormCreate} from "./FormCreate";
import {FormSuccessPurchase} from "./FormSuccess";

export const ExchangeForm = () => {
    const state_request = useStore($requestPurchase);

    if(!state_request) {
        return <FormCreate />
    }

    return <FormSuccessPurchase />
}