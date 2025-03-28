"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const injectRouters_1 = require("./modules/injectRouters");
const express_1 = __importDefault(require("express"));
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/maitreum';
mongoose_1.default.connect(MONGODB_URI)
    .then(() => {
    console.log('Connected to MongoDB');
    const serverApp = (0, express_1.default)();
    serverApp.use(express_1.default.json());
    (0, injectRouters_1.injectRoutes)(serverApp);
    serverApp.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
})
    .catch((error) => {
    console.error('MongoDB connection error:', error);
});
//# sourceMappingURL=server.js.map