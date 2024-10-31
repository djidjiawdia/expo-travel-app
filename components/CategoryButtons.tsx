import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import React, { useRef, useState } from "react";
import Colors from "@/constants/Colors";
import destinationCategories from "@/data/categories";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {
	onCategoryChanged: (category: string) => void;
};

export default function CategoryButtons({ onCategoryChanged }: Props) {
	const scrollRef = useRef<ScrollView>(null);
	const itemRef = useRef<TouchableOpacity[] | null[]>([]);
	const [activeIndex, setActiveIndex] = useState(0);

	const handleSelectCategory = (index: number) => {
		const item = itemRef.current[index];
		setActiveIndex(index);
		item?.measure(x => {
			scrollRef.current?.scrollTo({ x: x, y: 0, animated: true });
		});
		onCategoryChanged(destinationCategories[index].title);
	};

	return (
		<View>
			<Text style={styles.title}>Categories</Text>

			<ScrollView
				ref={scrollRef}
				horizontal
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{
					gap: 10,
					paddingVertical: 10,
					marginBottom: 10,
				}}
			>
				{destinationCategories.map((item, i) => (
					<TouchableOpacity
						key={i}
						ref={el => (itemRef.current[i] = el)}
						onPress={() => handleSelectCategory(i)}
						style={
							activeIndex === i
								? [styles.categoryBtn, styles.categoryBtnActive]
								: styles.categoryBtn
						}
					>
						<MaterialCommunityIcons
							name={item.iconName as any}
							size={20}
							color={
								activeIndex === i ? Colors.white : Colors.black
							}
						/>
						<Text
							style={
								activeIndex === i
									? [
											styles.categoryBtnText,
											{ color: Colors.white },
									  ]
									: styles.categoryBtnText
							}
						>
							{item.title}
						</Text>
					</TouchableOpacity>
				))}
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	title: {
		fontSize: 22,
		fontWeight: "700",
		color: Colors.black,
	},
	categoryBtn: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: Colors.white,
		paddingHorizontal: 16,
		paddingVertical: 10,
		borderRadius: 10,
		shadowColor: "#333333",
		shadowOffset: { width: 1, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 3,
	},
	categoryBtnActive: {
		backgroundColor: Colors.primaryColor,
	},
	categoryBtnText: {
		marginLeft: 5,
		color: Colors.black,
	},
});
