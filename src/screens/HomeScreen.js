import React from 'react';
import { Text, View, Image, StatusBar, StyleSheet, ScrollView } from 'react-native';
import { FlatList } from 'react-native';

const productsLine1 = [
  {
    id: 1,
    name: 'Jeans Desgastados Azul Cielo',
    description: 'Jeans Desgastados Azul Cielo de Trend Denim ofrecen un estilo fresco y relajado.',
    price: '$1100.00',
    brand: 'Trend Denim',
    image: 'https://i.pinimg.com/564x/96/c7/1c/96c71c2eeb5abc83aaf97b9c0c945113.jpg', // URL de la imagen
  },
  {
    id: 2,
    name: 'Top Corto Brillante Nocturno',
    description: 'Top Corto Brillante Nocturno, añade un toque de glamour a cualquier atuendo.',
    price: '$600.00',
    brand: 'Elegancia Urbana',
    image: 'https://i.pinimg.com/564x/8d/25/bb/8d25bbdf2fbae1287d1ce20b0252b81f.jpg', // URL de la imagen
  },
  {
    id: 3,
    name: 'Pantalones Cargo Denim Urbano.',
    description: 'Pantalones Cargo, son la fusión perfecta de funcionalidad y moda callejera.',
    price: '$1200.00',
    brand: ' Vanguardia Urbana',
    image: 'https://i.pinimg.com/564x/73/3f/55/733f55ad5e230f4e84b0f66db6772ffe.jpg', // URL de la imagen
  },
];

const productsLine2 = [
  {
    id: 4,
    name: ' Jersey Marinero Clásico',
    description: 'Diseños náuticos, el Jersey Marinero Clásico .',
    price: '$400.00',
    brand: 'Océano Azul',
    image: 'https://i.pinimg.com/564x/b2/37/08/b23708623d44154e70caca883942519c.jpg', 
  },
  {
    id: 5,
    name: 'Chaqueta Polar Nieve Blanca',
    description: 'chaqueta de forro polar blanca con cuello alto',
    price: '$500.00',
    brand: 'Montañas del Norte',
    image: 'https://i.pinimg.com/564x/03/a1/ba/03a1ba31874e8ac2a5b64c97a8c7962f.jpg', // URL de la imagen
  },
  
];
function LineaProductos({ data }) {
  return (
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.productContainer}>
          <Image source={{ uri: item.image }} style={styles.productImage} />
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productBrand}>Marca: {item.brand}</Text>
          <Text style={styles.productDescription}>{item.description}</Text>
          <Text style={styles.productPrice}>Precio: {item.price}</Text>
        </View>
      )}
    />
  );
}

function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Image
          style={styles.backgroundImage}
          source={{ uri: 'https://i.pinimg.com/564x/17/9b/fa/179bfaef8e1c7a622ab2fb1428c76e76.jpg' }} // URL de la imagen de fondo
        />
        <Text style={styles.title}>Bienvenido a la tienda de ropa</Text>
        {/* Sección destacada */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.featuredSection}>
            <Text style={styles.featuredTitle}>¡Productos destacados!</Text>
            <LineaProductos data={productsLine1} />
          </View>
        </ScrollView>
        <LineaProductos data={productsLine2} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    zIndex: -1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  featuredSection: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  featuredTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productContainer: {
    alignItems: 'center',
    marginRight: 20,
  },
  productImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  productCategory: {
    marginBottom: 5,
  },
  productBrand: {
    marginBottom: 5,
  },
  productDescription: {
    textAlign: 'center',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 18,
    color: 'green',
  },
});

export default HomeScreen;
