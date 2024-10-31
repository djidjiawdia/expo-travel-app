import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

export default function Layout() {
	return (
		<Tabs
			screenOptions={{
				tabBarStyle: {
					backgroundColor: Colors.bgColor,
					borderTopWidth: 0,
					padding: 0,
				},
				tabBarShowLabel: false,
				tabBarActiveTintColor: Colors.black,
				tabBarInactiveTintColor: "#999",
			}}
		>
			<Tabs.Screen
				name='index'
				options={{
					tabBarIcon: ({ color }) => (
						<Ionicons name='compass' size={28} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name='category'
				options={{
					tabBarIcon: ({ color }) => (
						<MaterialIcons
							name='space-dashboard'
							size={28}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name='search'
				options={{
					tabBarIcon: () => (
						<View
							style={{
								backgroundColor: Colors.primaryColor,
								height: 50,
								paddingHorizontal: 16,
								paddingVertical: 12,
								borderRadius: 10,
							}}
						>
							<Ionicons
								name='search'
								size={28}
								color={Colors.white}
							/>
						</View>
					),
				}}
			/>
			<Tabs.Screen
				name='bookmark'
				options={{
					tabBarIcon: ({ color }) => (
						<Ionicons name='bookmark' size={28} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name='profile'
				options={{
					tabBarIcon: ({ color }) => (
						<FontAwesome name='user' size={28} color={color} />
					),
				}}
			/>
		</Tabs>
	);
}
