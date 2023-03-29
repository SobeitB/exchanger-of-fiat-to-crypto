import { configureChains, createClient } from 'wagmi'
import {polygon} from '@wagmi/chains';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'

export const projectId = '0e308e825406edec9e97155531877bcb'

export  const { chains, provider } = configureChains(
    [ polygon ],
    [
        w3mProvider({ projectId })
    ]
)

export const wagmiClient = createClient({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, version: 1, chains }),
    provider
})

export const ethereumClient = new EthereumClient(wagmiClient, chains)