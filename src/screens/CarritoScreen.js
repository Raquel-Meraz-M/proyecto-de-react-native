import React from 'react';
import { ScrollView, Text, View, Image, StyleSheet } from 'react-native';

// Lista de imágenes
const images = [
  { id: 1, uri: 'https://i.pinimg.com/564x/73/3f/55/733f55ad5e230f4e84b0f66db6772ffe.jpg', name: 'Pantalones Cargo Denim Urbano.' },
  { id: 2, uri: 'https://i.pinimg.com/564x/96/c7/1c/96c71c2eeb5abc83aaf97b9c0c945113.jpg', name: 'Imagen Jeans Desgastados Azul Cielo' },
  { id: 3, uri: 'https://i.pinimg.com/564x/8d/25/bb/8d25bbdf2fbae1287d1ce20b0252b81f.jpg', name: 'Top Corto Brillante Nocturno' },
  { id: 4, uri: 'https://i.pinimg.com/564x/03/a1/ba/03a1ba31874e8ac2a5b64c97a8c7962f.jpg', name: 'Chaqueta Polar Nieve Blanca' },
];

const GalleryScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://i.pinimg.com/564x/17/9b/fa/179bfaef8e1c7a622ab2fb1428c76e76.jpg' }}
        style={styles.backgroundImage}
      />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Carrito de compras</Text>
        {/* Contenedor de la galería */}
        <View style={styles.galleryContainer}>
          {images.map((image) => (
            <View key={image.id} style={styles.imageContainer}>
              <Image source={{ uri: image.uri }} style={styles.image} />
              <Text style={styles.imageName}>{image.name}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'black',
  },
  galleryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    margin: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  imageName: {
    marginTop: 5,
    textAlign: 'center',
    color: 'black',
  },
});

export default GalleryScreen;
