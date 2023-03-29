import { CreatePurchaseDto } from "./Dto/create-purchase.dto";
import { PurchaseService } from "./purchase.service";
export declare class PurchaseController {
    private purchaseService;
    constructor(purchaseService: PurchaseService);
    createPurchase(purchaseDto: CreatePurchaseDto): Promise<import("./purchase.model").Purchases>;
    paymentMade(request_page: string): Promise<string>;
    ping(): Promise<string>;
}
