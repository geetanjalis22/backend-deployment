"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateToken = void 0;
//For Authentication
/*import jwt, { Secret, SignOptions } from 'jsonwebtoken';
const JWT_SECRET: Secret = process.env.JWT_SECRET || 'your-secure-secret';
const JWT_EXPIRES_IN: string = process.env.JWT_EXPIRES_IN || '30d';

export const generateToken = (userId: string): string => {
    return jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN } as SignOptions);
};

export const verifyToken = (token: string): any => {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (error) {
        return null;
    }
};*/
// src/utils/jwt.ts
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
// Load private and public keys
const PRIVATE_KEY = fs_1.default.readFileSync(path_1.default.join(__dirname, '../keys/private.key'), 'utf8');
const PUBLIC_KEY = fs_1.default.readFileSync(path_1.default.join(__dirname, '../keys/public.key'), 'utf8');
const signOptions = {
    algorithm: 'RS256',
    expiresIn: (process.env.JWT_EXPIRES_IN || '30d')
};
const generateToken = (userId) => {
    return jsonwebtoken_1.default.sign({ id: userId }, PRIVATE_KEY, signOptions);
};
exports.generateToken = generateToken;
const verifyToken = (token) => {
    return jsonwebtoken_1.default.verify(token, PUBLIC_KEY);
};
exports.verifyToken = verifyToken;
//# sourceMappingURL=jwt.js.map