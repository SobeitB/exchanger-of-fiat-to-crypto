import { Suspense } from "react";
import { WagmiConfig } from 'wagmi';
import { Web3Modal } from "@web3modal/react";

import { wagmiClient, projectId, ethereumClient } from 'shared/config/blockchain';

export const withWagmi = (component: () => React.ReactNode) => () => (
   <>
        <WagmiConfig client={wagmiClient}>
            <Suspense fallback="Loading...">
                {component()}
            </Suspense>
        </WagmiConfig>

        <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
   </>
);