import {Module } from '@nestjs/common';
import {SequelizeModule } from '@nestjs/sequelize';
import {ConfigModule } from '@nestjs/config';
import { PurchaseController } from './purchase/purchase.controller';
import { PurchaseModule } from './purchase/purchase.module';
import {Purchases} from "./purchase/purchase.model";

@Module({
    controllers:[PurchaseController],
    providers:[],
    imports: [
        ConfigModule.forRoot({
            envFilePath:`.${process.env.NODE_ENV}.env`
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRESS_HOST,
            port: Number(process.env.POSTGRESS_PORT),
            username: process.env.POSTGRESS_USER,
            password: process.env.POSTGRESS_PASSWORD,
            database: process.env.POSTGRESS_DB,
            models:[Purchases],
            autoLoadModels:true
        }),
        PurchaseModule
    ]
})
export class AppModule {

}