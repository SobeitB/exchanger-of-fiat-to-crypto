import { Model } from "sequelize-typescript";
import { StatusPurchaseConfig } from "./shared";
export declare class CreatePurchaseAttrs {
    email: string;
    FIO: string;
    cardNumbers: string;
    polygonAddress: string;
    isBuy: boolean;
    quantityFiat: number;
    status: StatusPurchaseConfig.ACTIVE;
    request_page: string;
}
export declare class Purchases extends Model<Purchases, CreatePurchaseAttrs> {
    id: number;
    email: string;
    FIO: string;
    cardNumbers: string;
    polygonAddress: string;
    isBuy: boolean;
    quantityFiat: number;
    status: string;
    request_page: string;
    to_card: string;
}
