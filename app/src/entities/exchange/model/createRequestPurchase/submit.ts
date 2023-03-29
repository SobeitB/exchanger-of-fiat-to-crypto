import {SyntheticEvent} from "react";
import { polygon } from 'viem/chains'
import { createWalletClient, custom } from 'viem'
import ky from 'ky';

import {SERVER_URL} from "shared/config";
import {createRequest as createRequestStore} from "../stateRequest";


export const createRequestPurchase = async (event: SyntheticEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as any);

    const client = createWalletClient({
        chain: polygon,
        transport: custom(window.ethereum as any)
    })

    const [address] = await client.getAddresses();

    const requestBody = {
        email:formData.get('email'),
        FIO:formData.get('fio'),
        cardNumbers:formData.get('bank_card'),
        polygonAddress:address,
        isBuy:true,
        quantityFiat:500,
    }


    const createRequest:any = await ky.post(
        `${SERVER_URL}purchase/create`,
        {json: requestBody})
        .json();

    console.log(createRequest)
    createRequestStore({
        to_card:createRequest.to_card,
        request_page:createRequest.request_page
    })
}