import {Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {StatusPurchaseConfig} from "./shared";

export class CreatePurchaseAttrs {

    email: string;
    FIO: string;
    cardNumbers: string;
    polygonAddress: string;
    isBuy:boolean;
    quantityFiat:number;
    status: StatusPurchaseConfig.ACTIVE;
    request_page:string;

}

@Table({tableName: 'purchase'})
export class Purchases extends Model<Purchases, CreatePurchaseAttrs> {
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'user@mail.ru', description: 'Почтовый адрес'})
    @Column({type: DataType.STRING, allowNull: false})
    email: string;

    @ApiProperty({example: 'Мищенко Олег Олегович', description: 'Фио пользователя'})
    @Column({type: DataType.STRING, allowNull: false})
    FIO: string;

    @ApiProperty({example: '2202 2023 1678 1404', description: 'Номер карты'})
    @Column({type: DataType.STRING, allowNull: false})
    cardNumbers: string;

    @ApiProperty({example: '0x097D3B80e42Cf59a137C3E4B46CA36783D5Bc77C', description: 'Аддересс кошелька полигон'})
    @Column({type: DataType.STRING, allowNull: false})
    polygonAddress: string;

    @ApiProperty({example: 'true', description: 'Покупает ли пользователь матик или продаёт его'})
    @Column({type: DataType.BOOLEAN, allowNull: false})
    isBuy: boolean;

    @ApiProperty({example: '500', description: 'На сколько рублей пользователь покупает матика'})
    @Column({type: DataType.INTEGER, allowNull: false})
    quantityFiat: number;

    @ApiProperty({example: 'active', description: 'Статус заявки'})
    @Column({type: DataType.STRING, defaultValue: StatusPurchaseConfig.ACTIVE})
    status: string;

    @ApiProperty({example: '928493943-ds435', description: 'Страница заявки, где нужно подтвердить оплату'})
    @Column({type: DataType.STRING, allowNull: false})
    request_page:string;

    @ApiProperty({example: '321324234456', description: 'Кому скинуть баблос'})
    @Column({type: DataType.STRING, allowNull: false})
    to_card:string;
}