"use client";

import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";

interface ActionModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description?: string;
    children: React.ReactNode;
}

export const ActionModal = ({
                                isOpen,
                                onClose,
                                title,
                                description,
                                children
                            }: ActionModalProps) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[550px] bg-white/95 backdrop-blur-xl border-white/20 rounded-[2.5rem] shadow-2xl overflow-hidden p-0">
                {/* Visual Header Accent */}
                <div className="h-2 w-full bg-gradient-to-r from-[#0b1a9c] via-[#e51990] to-[#0b1a9c]" />

                <div className="p-8 md:p-10">
                    <DialogHeader className="mb-6">
                        <DialogTitle className="text-3xl font-bold text-[#07036e]">
                            {title}
                        </DialogTitle>
                        {description && (
                            <DialogDescription className="text-gray-500 text-base">
                                {description}
                            </DialogDescription>
                        )}
                    </DialogHeader>

                    {/* Form Container with Framer Motion for smooth entry */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            {children}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </DialogContent>
        </Dialog>
    );
};