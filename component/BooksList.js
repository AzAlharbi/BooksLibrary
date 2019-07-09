import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    Dimensions
} from 'react-native';
import {SearchBar} from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';

const numColumns=2;
export default class BooksList extends Component {

    constructor() {
        super();
        this.state = {
            dataSource: [],
            search: '',
        };
    }
    updateSearch = search => {
        this.setState({ search });
    };

    renderHeader = () => {
        return <SearchBar 
        placeholder="Type Here..." 
        lightTheme 
        round
        cancelButtonTitle='cancel'
        onChangeText={this.updateSearch}
        value={this.state}
         />;
    };
    
    renderItem = ({ item }) => {
        return (
            
            <View style={styles.item} >
                <TouchableOpacity style={{alignItems:'center'}}>
                <Image style={{ width: 80, height: 80, margin: 5 }} source={{ uri: item.image }} />
                <View style={{ fLex: 1, justifyContent: 'center', marginLeft: 5 }} >
                    <Text style={[styles.title, styles.text]} > {item.book_title} </Text>
                    <Text style={[styles.auther, styles.text]} > {item.author} </Text>
                </View>
                </TouchableOpacity>
            </View>
            
        )
    }

    componentDidMount() {
        const url = "https://www.json-generator.com/api/json/get/ccLAsEcOSq?index=1";
        fetch(url).then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    dataSource: responseJson.book_array
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }


    render() {
        const { search } = this.state;
        return (
            <View>
                {/* <SearchBar
                    placeholder="Type Here..."
                    onChangeText={this.updateSearch}
                    value={search}
                    barStyle="default"
                    showsCancelButtonWhileEditing={true}
                /> */}
                <FlatList
                    data={this.state.dataSource}
                    renderItem={this.renderItem}
                    numColumns={numColumns}
                    ListHeaderComponent={this.renderHeader}
                />
            
            </View>
        )

    }
}
const styles = StyleSheet.create({
item:{
        flex: 1,
        flexDirection: 'column', 
        //marginBottos: 3 ,
        height: Dimensions.get('window').width / numColumns, // approximate a square
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:'#fff',
        margin:10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
},
text:{
textAlign:'center'
},
title:{
    fontSize: 18, 
    color: '#000', 
    marginBottom: 15
},
auther: { 
    fontSize: 16, 
    color: '#5c6773' }
})