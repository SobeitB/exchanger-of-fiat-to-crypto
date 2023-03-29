

/**
 * Модуль инициализации env-переменных
 * @remark Если не найдено значение хоть одной переменной,
 * Приложение сразу выбросит ошибку, при инициализации модуля
 * @module
 */

/**
 * Получение env-переменной
 * @throwable
 */

const getEnvVar = (key: string) => {
    console.log(import.meta.env)
    if (import.meta.env[key] === undefined) {
        throw new Error(`Env variable ${key} is required`);
    }

    return import.meta.env[key] || "";
};

export const SERVER_URL = getEnvVar("VITE_SERVER_URL");

export const NODE_ENV = getEnvVar("MODE");

export const isDevEnv = NODE_ENV === "development";

export const isProdEnv = NODE_ENV === "production";