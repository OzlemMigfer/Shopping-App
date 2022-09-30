import React, {useEffect,useState} from "react";
import {Text, View, StyleSheet, FlatList, TextInput} from 'react-native';
import ProductCard from "./components/ProductCard/ProductCard";
import products_data from './products_data.json';

function App(){
    const renderProducts = ({item}) => <ProductCard products ={item}/>
    const keyProducts = item => item.id.toString();
    const [search, setsearch] = useState('');
    return(
        <View style={styles.container}>
            <Text style={styles.headerText}>PATIKASTORE</Text>
            <TextInput
                style={styles.textInput}
                value={search}
                placeholder="Ara..."
            />
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
    },
    headerText:{
        color:'#660066',
        fontSize:30,
        fontWeight:'bold',
        padding:15
    },
    textInput:{
        height:50,
        backgroundColor:'#e6e6e6',
        borderRadius:10,
        margin:5,
        fontSize:18,
        paddingLeft:10
    }
});

export default App;
