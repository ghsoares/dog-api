import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StatusBar, StyleSheet, Text, View } from 'react-native';
import BreedSelector from './src/components/BreedSelector';
import ImagesCarousel from './src/components/ImagesCarousel';
import { getAllBreeds, getBreedImages } from './src/utils/api';

/*

Nomes:
  RM84297 - Antonio Sassine Mendonça
  RM84735 - Pedro Dib
  RM86420 - Gabriel Henrique Pereira Soares

*/

export default function App() {
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentBreed, setCurrentBreed] = useState("");
  const [breedImages, setBreedImages] = useState([]);

  useEffect(() => {
    setLoading(true);
    const func = async () => {
      const b = await getAllBreeds();
      setBreeds(b);
      setLoading(false);
    };
    func();
  }, []);

  const selectBreed = (breed) => {
    if (breed === "0") return;
    setCurrentBreed(breed);
    const func = async () => {
      const urls = await getBreedImages(breed);
      console.log(urls);
      setBreedImages(urls);
    }

    func();
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>DOG API</Text>
      </View>
      {loading && (
        <ActivityIndicator />
      )}
      {!loading && (
        <>
          <BreedSelector
            breeds={breeds}
            value={currentBreed}
            selectedBreed={selectBreed}
          />
          {breedImages.length > 0 && (
            <ImagesCarousel
              urls={breedImages}
            />
          )}
        </>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  header: {
    backgroundColor: '#05f',
  },
  headerText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 32
  }
});
