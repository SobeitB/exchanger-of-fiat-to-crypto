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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_purchase_dto_1 = require("./Dto/create-purchase.dto");
const purchase_service_1 = require("./purchase.service");
let PurchaseController = class PurchaseController {
    constructor(purchaseService) {
        this.purchaseService = purchaseService;
    }
    async createPurchase(purchaseDto) {
        return this.purchaseService.createPurchase(purchaseDto);
    }
    async paymentMade(request_page) {
        return this.purchaseService.paymentMade(request_page);
    }
    async ping() {
        return 'ping';
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Создание заявки' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: create_purchase_dto_1.CreatePurchaseDto }),
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_purchase_dto_1.CreatePurchaseDto]),
    __metadata("design:returntype", Promise)
], PurchaseController.prototype, "createPurchase", null);
__decorate([
    (0, common_1.Post)('/payment_made/:request_page'),
    __param(0, (0, common_1.Param)('request_page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PurchaseController.prototype, "paymentMade", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PurchaseController.prototype, "ping", null);
PurchaseController = __decorate([
    (0, swagger_1.ApiTags)('Заявки на покупку'),
    (0, common_1.Controller)('purchase'),
    __metadata("design:paramtypes", [purchase_service_1.PurchaseService])
], PurchaseController);
exports.PurchaseController = PurchaseController;
//# sourceMappingURL=purchase.controller.js.map