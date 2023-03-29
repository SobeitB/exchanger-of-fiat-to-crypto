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
exports.PurchaseService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const purchase_model_1 = require("./purchase.model");
const selenium_webdriver_1 = require("selenium-webdriver");
const shared_1 = require("./shared");
let PurchaseService = class PurchaseService {
    constructor(purchasesRepository) {
        this.purchasesRepository = purchasesRepository;
    }
    async createPurchase(dto) {
        const request = await this.createRequestExchange(dto);
        const purchase = await this.purchasesRepository.create(request);
        return purchase;
    }
    async createRequestExchange(dto) {
        console.log(dto);
        let driver = await new selenium_webdriver_1.Builder().forBrowser('firefox').build();
        try {
            await driver.get(`${shared_1.configSovaGG.url}${shared_1.configSovaGG.urlBuy}`);
            await driver.manage().setTimeouts({ implicit: 1000 });
            let email_input = await driver.findElement(selenium_webdriver_1.By.id(shared_1.configSovaGG.email_inp_id));
            email_input.sendKeys(dto.email, selenium_webdriver_1.Key.ENTER);
            await driver.manage().setTimeouts({ implicit: 1000 });
            let fio_input = await driver.findElement(selenium_webdriver_1.By.id(shared_1.configSovaGG.fio_inp_id));
            fio_input.sendKeys(dto.FIO, selenium_webdriver_1.Key.ENTER);
            await driver.manage().setTimeouts({ implicit: 1000 });
            let form_card_input = await driver.findElement(selenium_webdriver_1.By.id(shared_1.configSovaGG.card_inp_id));
            form_card_input.sendKeys(dto.cardNumbers, selenium_webdriver_1.Key.ENTER);
            await driver.manage().setTimeouts({ implicit: 1000 });
            let address_card_input = await driver.findElement(selenium_webdriver_1.By.id(shared_1.configSovaGG.address_inp_id));
            address_card_input.sendKeys(dto.polygonAddress, selenium_webdriver_1.Key.ENTER);
            await driver.manage().setTimeouts({ implicit: 1000 });
            let button_submit_first = await driver.findElement(selenium_webdriver_1.By.id('start_exchange_btn'));
            button_submit_first.click();
            await driver.manage().setTimeouts({ implicit: 5000 });
            let button_submit = await driver.findElement(selenium_webdriver_1.By.id(shared_1.configSovaGG.submit_id));
            button_submit.click();
            await driver.manage().setTimeouts({ implicit: 1000 });
            let to_card_el = await driver.findElement(selenium_webdriver_1.By.className(shared_1.configSovaGG.cardNumber_class));
            const to_card = await to_card_el.getText();
            const current_page = await driver.getCurrentUrl();
            const current_page_links = current_page.split('/');
            const request_page = current_page_links[current_page_links.length - 1];
            return Object.assign({ to_card,
                request_page }, dto);
        }
        finally {
            await driver.quit();
        }
    }
    async paymentMade(request_page) {
        let driver = await new selenium_webdriver_1.Builder().forBrowser('firefox').build();
        try {
            await driver.get(`${shared_1.configSovaGG.url}${shared_1.configSovaGG.urlMadePurchase}/${request_page}`);
            await driver.manage().setTimeouts({ implicit: 5000 });
            let button_submit = await driver.findElement(selenium_webdriver_1.By.className(shared_1.configSovaGG.made_purchase_class));
            button_submit.click();
            return 'success';
        }
        catch (e) {
            console.log(e);
        }
    }
};
PurchaseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(purchase_model_1.Purchases)),
    __metadata("design:paramtypes", [Object])
], PurchaseService);
exports.PurchaseService = PurchaseService;
//# sourceMappingURL=purchase.service.js.map