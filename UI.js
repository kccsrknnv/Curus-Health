import React, { Component } from 'react';
import {Alert, AppRegistry, FlatList, StyleSheet, Text, View, Image } from 'react-native';
import flatListData from './Data/flatListData';

class FlatListItem extends Component {
    render() { 
        return (    
            <View style={{
                flex: 1,
                flexDirection:'column',                                
            }}>            
                <View style={{
                        flex: 1,
                        flexDirection:'row',                
                        backgroundColor: 'mediumseagreen'
                }}>            
                    <Image 
                        source={{uri: this.props.item.image}}
                        style={{width: 100, height: 100, margin: 5}}
                    >

                    </Image>
                    <View style={{
                            flex: 1,
                            flexDirection:'column',   
                            height: 150                
                        }}> 
                        <View>
      {this.props.item.gender=="Male" ? <Text style={styles.flatListItem}>Mr.</Text> : <Text style={styles.flatListItem}>Mrs.</Text>}
    </View>
                            <Text style={{fontWeight: 'bold',color:'black' }}>{' '}{this.props.item.first_name}
                            {' '}
                            {this.props.item.last_name}{' \n '}
                            </Text>
                            <Text numberOfLines={1}>
                            <Text style={styles.flatListItem}>{this.props.item.description}</Text>
                            </Text>
                    </View>              
                </View>
                <View style={{
                    height: 5,
                    backgroundColor:'black'                            
                }}>
            
                </View>
          </View>
        );
    }
}
const styles = StyleSheet.create({
    flatListItem: {
        color: 'white',
        padding: 10,
        fontSize: 15,  
    }
});

export default class BasicFlatList extends Component {
   onPressButton() {  
        Alert.alert('You clicked the button!')  
    }  
    render() {
      return (
        
        <View style={{flex: 1, marginTop: 22}}>
            <FlatList 
                data={flatListData}
                renderItem={({item, index})=>{
                    return (
                    <FlatListItem item={item} index={index}>

                    </FlatListItem>);
                }}
                >

            </FlatList>
        </View>
      );
    }
}