import {createEvent, createStore} from "effector";

 export interface request_purchase {
    to_card:string;
    request_page:string;
}

export const $requestPurchase = createStore<request_purchase | null>(null);

export const createRequest = createEvent<request_purchase>();
export const successRequest = createEvent();

$requestPurchase
    .on(createRequest, (_, payload) => payload)
    .on(successRequest, (_, payload) => null)
