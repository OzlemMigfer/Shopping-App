import { StyleSheet,Dimensions } from "react-native";


export default StyleSheet.create({
    container:{
        backgroundColor:'#e6e6e6',
        borderRadius:10,
        margin:5
    },
    image:{
        height:Dimensions.get('window').height /4,
        width:Dimensions.get('window').width /2.3,
        borderRadius:10,
        margin:5
    },
    text_container:{
        margin:5
    },
    title:{
        fontSize:18,
        fontWeight:'bold',
        color:'black',
        width:Dimensions.get('window').width /2.3,
    },
    price:{
        fontSize:17,
        fontWeight:'bold',
        color:'gray'
    },
    stock:{
        fontSize:25,
        fontWeight:'bold',
        color:'red'
    }
});

