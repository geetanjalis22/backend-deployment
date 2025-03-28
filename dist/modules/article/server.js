"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./config/db"));
const categoryRoutes_1 = __importDefault(require("./routes/categoryRoutes"));
const tagRoutes_1 = __importDefault(require("./routes/tagRoutes"));
const articleRoutes_1 = __importDefault(require("./routes/articleRoutes"));
const auth_1 = __importDefault(require("./routes/auth"));
const protected_1 = __importDefault(require("./routes/protected"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// Connect to MongoDB
(0, db_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Welcome to the CRUD API!");
});
// Routes
app.use("/api/categories", categoryRoutes_1.default);
app.use("/api/tags", tagRoutes_1.default);
app.use("/api/articles", articleRoutes_1.default);
app.use("/api/auth", auth_1.default);
app.use("/api", protected_1.default);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//# sourceMappingURL=server.js.map