import { Module } from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import {PurchaseController} from "./purchase.controller";
import {Purchases} from "./purchase.model";
import {SequelizeModule} from "@nestjs/sequelize";

@Module({
  controllers:[PurchaseController],
  providers: [PurchaseService],
  imports: [
    SequelizeModule.forFeature([Purchases]),
  ],
  exports: [
      PurchaseService
  ]
})
export class PurchaseModule {}
