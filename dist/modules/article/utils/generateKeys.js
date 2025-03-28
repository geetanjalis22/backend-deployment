"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const crypto_1 = __importDefault(require("crypto"));
// Create 'keys' folder if it doesn't exist
const keysDir = path_1.default.join(__dirname, "../../src/keys");
if (!fs_1.default.existsSync(keysDir)) {
    fs_1.default.mkdirSync(keysDir);
}
// Generate RSA keys
const { publicKey, privateKey } = crypto_1.default.generateKeyPairSync("rsa", {
    modulusLength: 2048,
    publicKeyEncoding: { type: "pkcs1", format: "pem" },
    privateKeyEncoding: { type: "pkcs1", format: "pem" },
});
// Save the keys to files
fs_1.default.writeFileSync(path_1.default.join(keysDir, "private.key"), privateKey);
fs_1.default.writeFileSync(path_1.default.join(keysDir, "public.key"), publicKey);
console.log("Public and Private keys have been generated successfully!");
//# sourceMappingURL=generateKeys.js.map