import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";

import {Purchases} from "./purchase.model";
import {CreatePurchaseDto} from "./Dto/create-purchase.dto";
import {Builder, By, Key} from 'selenium-webdriver';
import {configSovaGG} from "./shared";

@Injectable()
export class PurchaseService {
    constructor(@InjectModel(Purchases) private purchasesRepository: typeof Purchases) {}

    async createPurchase(dto: CreatePurchaseDto) {

        const request = await this.createRequestExchange(dto);

        const purchase = await this.purchasesRepository.create(request);

        return purchase;
    }

    async createRequestExchange(dto: CreatePurchaseDto) {
        console.log(dto)
        let driver = await new Builder().forBrowser('firefox').build();

        try {
            await driver.get(`${configSovaGG.url}${configSovaGG.urlBuy}`);

            await driver.manage().setTimeouts({implicit: 1_000})

            let email_input = await driver.findElement(By.id(configSovaGG.email_inp_id));
            email_input.sendKeys(dto.email, Key.ENTER);

            await driver.manage().setTimeouts({implicit: 1_000})

            let fio_input = await driver.findElement(By.id(configSovaGG.fio_inp_id));
            fio_input.sendKeys(dto.FIO, Key.ENTER);

            await driver.manage().setTimeouts({implicit: 1_000})

            let form_card_input = await driver.findElement(By.id(configSovaGG.card_inp_id));
            form_card_input.sendKeys(dto.cardNumbers, Key.ENTER);

            await driver.manage().setTimeouts({implicit: 1_000})

            let address_card_input = await driver.findElement(By.id(configSovaGG.address_inp_id));
            address_card_input.sendKeys(dto.polygonAddress, Key.ENTER);

            await driver.manage().setTimeouts({implicit: 1_000})

            let button_submit_first = await driver.findElement(By.id('start_exchange_btn'))
            button_submit_first.click();

            await driver.manage().setTimeouts({implicit: 5_000})

            let button_submit = await driver.findElement(By.id(configSovaGG.submit_id));
            button_submit.click();

            await driver.manage().setTimeouts({implicit: 1_000})

            let to_card_el = await driver.findElement(By.className(configSovaGG.cardNumber_class));

            const to_card = await to_card_el.getText()

            const current_page = await driver.getCurrentUrl();
            const current_page_links = current_page.split('/');
            const request_page = current_page_links[current_page_links.length - 1];

            return {
                to_card,
                request_page,
                ...dto,
            }
        } finally {
            await driver.quit();
        }
    }

    async paymentMade(request_page:string) {
        let driver = await new Builder().forBrowser('firefox').build();

        try {
            await driver.get(`${configSovaGG.url}${configSovaGG.urlMadePurchase}/${request_page}`);

            await driver.manage().setTimeouts({implicit: 5_000});

            let button_submit = await driver.findElement(By.className(configSovaGG.made_purchase_class))
            button_submit.click();

            return 'success'
        } catch (e) {
            console.log(e)
        }
    }
}
