"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const App = (0, express_1.default)();
App.use(express_1.default.json());
const PORT = 3000;
App.listen(PORT, () => {
    console.log("App listen 'http://localhost:3000' ");
});
App.get('/', () => {
    console.log("Hello Future");
});
App.get('/api/data', (req, res) => {
    const data = { message: "Hello from the backend!" };
    res.end(data);
    console.log(data);
});
