import { Request, Response } from "express";
import Category from "../models/Category"; // ✅ FIXED: Default import

export const createCategory = async (req: Request, res: Response): Promise<void> => {
    try {
        const category = await Category.create(req.body);
        res.status(201).json(category);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const getCategories = async (req: Request, res: Response): Promise<void> => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const getCategoryById = async (req: Request, res: Response): Promise<void> => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) {
            res.status(404).json({ error: "Category not found" });
            return;
        }
        res.status(200).json(category);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const updateCategory = async (req: Request, res: Response): Promise<void> => {
    try {
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!category) {
            res.status(404).json({ error: "Category not found" });
            return;
        }
        res.status(200).json(category);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteCategory = async (req: Request, res: Response): Promise<void> => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);
        if (!category) {
            res.status(404).json({ error: "Category not found" });
            return;
        }
        res.status(200).json({ message: "Category deleted" });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};
