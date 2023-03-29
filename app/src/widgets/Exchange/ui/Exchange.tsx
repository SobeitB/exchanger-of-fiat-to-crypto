import {Web3Button} from "@web3modal/react";
import { useAccount } from 'wagmi'
import {ExchangeForm} from "entities/exchange";



export const Exchange = () => {
    const { address } = useAccount()

    if(address) {
        return (
            <div>
                <ExchangeForm />
            </div>
        )
    }

    return(
        <div>
            <Web3Button />
        </div>
    )
}