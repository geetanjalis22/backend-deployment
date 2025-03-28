"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTag = exports.updateTag = exports.getTagById = exports.getTags = exports.createTag = void 0;
const Tag_1 = __importDefault(require("../models/Tag"));
/**
 * Create a new tag
 */
const createTag = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield Tag_1.default.create(data);
});
exports.createTag = createTag;
/**
 * Get all tags
 */
const getTags = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield Tag_1.default.find();
});
exports.getTags = getTags;
/**
 * Get a single tag by ID
 */
const getTagById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield Tag_1.default.findById(id);
});
exports.getTagById = getTagById;
/**
 * Update a tag by ID
 */
const updateTag = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield Tag_1.default.findByIdAndUpdate(id, data, { new: true });
});
exports.updateTag = updateTag;
/**
 * Delete a tag by ID
 */
const deleteTag = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield Tag_1.default.findByIdAndDelete(id);
});
exports.deleteTag = deleteTag;
//# sourceMappingURL=tagService.js.map