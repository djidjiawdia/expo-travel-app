import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Category = () => {
	return (
		<View style={styles.container}>
			<Text>Category</Text>
		</View>
	);
};

export default Category;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
