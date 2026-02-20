import { buildApp } from './app.js';

const start = async () => {
    const app = await buildApp();

    await app.listen({port: 3000})
    console.log("Pet store open");
};

start();