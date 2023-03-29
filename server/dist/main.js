"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function start() {
    const PORT = process.env.PORT || 3000;
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: {
            origin: 'http://localhost:3000',
            credentials: true,
        }
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Обменик через selenium')
        .setDescription('Документация рест апи')
        .setVersion('1.0.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('/api/docs', app, document);
    await app.listen(PORT, () => console.log(`server started, port = ${PORT}`));
}
start();
//# sourceMappingURL=main.js.map