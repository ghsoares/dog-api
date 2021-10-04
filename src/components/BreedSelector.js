import { Picker } from '@react-native-picker/picker';
import React from 'react';

export default function BreedSelector({ value, breeds, selectedBreed }) {
	const children = breeds.map(breed => (
		<Picker.Item
			label={breed.toUpperCase()}
			value={breed}
			key={breed}
		/>
	));

	return (
		<Picker
			selectedValue={value}
			onValueChange={(value, index) => selectedBreed(value)}
			prompt="Raças"
		>
			<Picker.Item label='Selecione uma raça...' value='0' />
			{children}
		</Picker>
	);
}



