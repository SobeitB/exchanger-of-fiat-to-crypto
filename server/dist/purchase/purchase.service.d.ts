import { Purchases } from "./purchase.model";
import { CreatePurchaseDto } from "./Dto/create-purchase.dto";
export declare class PurchaseService {
    private purchasesRepository;
    constructor(purchasesRepository: typeof Purchases);
    createPurchase(dto: CreatePurchaseDto): Promise<Purchases>;
    createRequestExchange(dto: CreatePurchaseDto): Promise<{
        email: string;
        FIO: string;
        cardNumbers: string;
        polygonAddress: string;
        isBuy: boolean;
        quantityFiat: number;
        to_card: any;
        request_page: any;
    }>;
    paymentMade(request_page: string): Promise<string>;
}
