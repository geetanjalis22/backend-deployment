"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_1 = require("./utils/jwt");
// Test Data
const testUserId = 'user123';
// Generate Token
const token = (0, jwt_1.generateToken)(testUserId);
console.log('Generated Token:', token);
// Verify Token
try {
    const decoded = (0, jwt_1.verifyToken)(token);
    console.log('Decoded Token:', decoded);
}
catch (error) {
    if (error instanceof Error) {
        console.error('Invalid Token Error:', error.message);
    }
    else {
        console.error('Unknown error occurred:', error);
    }
}
//# sourceMappingURL=testJwt.js.map