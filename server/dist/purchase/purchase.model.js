"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Purchases = exports.CreatePurchaseAttrs = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const swagger_1 = require("@nestjs/swagger");
const shared_1 = require("./shared");
class CreatePurchaseAttrs {
}
exports.CreatePurchaseAttrs = CreatePurchaseAttrs;
let Purchases = class Purchases extends sequelize_typescript_1.Model {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Уникальный идентификатор' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true }),
    __metadata("design:type", Number)
], Purchases.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'user@mail.ru', description: 'Почтовый адрес' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Purchases.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Мищенко Олег Олегович', description: 'Фио пользователя' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Purchases.prototype, "FIO", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2202 2023 1678 1404', description: 'Номер карты' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Purchases.prototype, "cardNumbers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '0x097D3B80e42Cf59a137C3E4B46CA36783D5Bc77C', description: 'Аддересс кошелька полигон' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Purchases.prototype, "polygonAddress", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'true', description: 'Покупает ли пользователь матик или продаёт его' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.BOOLEAN, allowNull: false }),
    __metadata("design:type", Boolean)
], Purchases.prototype, "isBuy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '500', description: 'На сколько рублей пользователь покупает матика' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], Purchases.prototype, "quantityFiat", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'active', description: 'Статус заявки' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, defaultValue: shared_1.StatusPurchaseConfig.ACTIVE }),
    __metadata("design:type", String)
], Purchases.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '928493943-ds435', description: 'Страница заявки, где нужно подтвердить оплату' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Purchases.prototype, "request_page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '321324234456', description: 'Кому скинуть баблос' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Purchases.prototype, "to_card", void 0);
Purchases = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'purchase' })
], Purchases);
exports.Purchases = Purchases;
//# sourceMappingURL=purchase.model.js.map