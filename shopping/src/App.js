import React from "react";
import {Text, View, StyleSheet, FlatList} from 'react-native';
import ProductCard from "./components/ProductCard/ProductCard";
import products_data from './products_data.json';

function App(){
    const renderProducts = ({item}) => <ProductCard products ={item}/>
    const keyProducts = item => item.id.toString();
    return(
        <View style={styles.container}>
            <FlatList
                numColumns={2}
                columnWrapperStyle={{ justifyContent:'space-between' }}
                keyExtractor={keyProducts}
                data ={products_data}
                renderItem={renderProducts}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgrounColor:'white',
        flex:1
    }
});

export default App;