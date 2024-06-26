import { Home } from "./Home";
import React, { useState, useCallback } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Wallet } from "@/Services/wallets";
import { http } from "@/Hooks/api";
import { ScreenWrapper } from "@/Components";
import { TabNavigation } from "@/Navigation/Main";
import { TabScreens } from "..";
import { Transaction } from "@/Services/transactions";
import { useUser } from "@/Components/UserContext";

export const HomeContainer = () => {
  
	const { userId } = useUser();
	const navigation = useNavigation<TabNavigation>();
  	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");
  
	const [wallets, setWallets] = useState<Wallet[]>([]);
	const [transactions, setTransactions] = useState<Transaction[]>([]);
	
  	useFocusEffect(
		useCallback(() => {
			setError("");
			Promise.all([
				http.get('wallets/byUsersId', { user_ID: userId }),
				http.get('transaction/histories/all', { user_ID: userId })
			]).then(([wals, trans]) => {
					setWallets(wals);
					setTransactions(trans);
					setLoading(false);
				}).catch(error => setError(error.toString()));
		}, [])
  	);

  	return (
		<ScreenWrapper
			loading={loading}
			error={error}
			backToHome={() => { navigation.navigate(TabScreens.HOME); }}
		>
			<Home 
				wallets={wallets}
				transactions={transactions}
			/>
		</ScreenWrapper>
	);
};
