"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const App = (0, express_1.default)();
App.use(express_1.default.json());
App.use((0, cors_1.default)());
const PORT = 8001;
App.listen(PORT, () => {
    console.log("App listen 'http://localhost:8001' ");
});
App.get('/', () => {
    console.log("Hello Future");
});
App.get('/api/data', (req, res) => {
    const data = { message: "Hello from the backend!" };
    res.json(data);
    console.log(data);
});
const corsOptions = {
    origin: 'http://localhost:5173',
};
App.use((0, cors_1.default)(corsOptions));
