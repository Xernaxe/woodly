"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface BurgerMenuContextType {
	isBurgerMenuOpen: boolean;
	setIsBurgerMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const BurgerMenuContext = createContext<BurgerMenuContextType | undefined>(undefined);

interface BurgerMenuProviderProps {
	children: ReactNode;
}

export const BurgerMenuProvider: React.FC<BurgerMenuProviderProps> = ({ children }) => {
	const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

	return (
		<BurgerMenuContext.Provider value={{ isBurgerMenuOpen, setIsBurgerMenuOpen }}>
			{children}
		</BurgerMenuContext.Provider>
	);
};

export const useBurgerMenu = (): BurgerMenuContextType => {
	const context = useContext(BurgerMenuContext);
	if (!context) {
		throw new Error("useBurgerMenu must be used within a BurgerMenuProvider");
	}
	return context;
};
