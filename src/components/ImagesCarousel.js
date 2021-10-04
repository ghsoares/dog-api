import React, {} from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper';

export default function ImagesCarousel({ urls }) {
	//{{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
	const children = urls.map(url => (
		<View
			style={styles.imageWrapper}
			key={url}
		>
			<Image
				style={styles.image}
				source={{uri: url}}
				
			/>
		</View>
	));

	return (
		<View style={styles.container}>
			<Swiper>
				{children}
			</Swiper>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 16
	},
	imageWrapper: {
		flex: 1,
		flexDirection: 'row'
	},
	image: {
		flex: 1
	}
});