import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

import {CreatePurchaseDto} from "./Dto/create-purchase.dto";
import {PurchaseService} from "./purchase.service";

@ApiTags('Заявки на покупку')
@Controller('purchase')
export class PurchaseController {

    constructor(private purchaseService: PurchaseService) {}

    @ApiOperation({summary: 'Создание заявки'})
    @ApiResponse({status: 200, type: CreatePurchaseDto})
    @Post('/create')
    async createPurchase(@Body() purchaseDto: CreatePurchaseDto) {
        return this.purchaseService.createPurchase(purchaseDto);
    }

    @Post('/payment_made/:request_page')
    async paymentMade(@Param('request_page') request_page: string) {
        return this.purchaseService.paymentMade(request_page);
    }

    @Get()
    async ping() {
        return 'ping'
    }
}
