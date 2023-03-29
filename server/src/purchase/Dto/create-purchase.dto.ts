import {ApiProperty} from "@nestjs/swagger";

export class CreatePurchaseDto {
    email: string;
    FIO: string;
    cardNumbers: string;
    polygonAddress: string;
    isBuy:boolean;
    quantityFiat:number;
}
