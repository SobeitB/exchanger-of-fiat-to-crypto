
import ky from 'ky';

import {SERVER_URL} from "shared/config";


export const succcessPurchase = (to_bank:string) => async () => {


    const createRequest = await ky.post(
        `${SERVER_URL}purchase/payment_made/${to_bank}`)
        .json();

    console.log(createRequest)
}