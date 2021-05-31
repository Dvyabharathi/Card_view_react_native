import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';


// or any pure javascript modules available in npm
import { Avatar, Button, Card, Title, Paragraph, Divider } from 'react-native-paper';


export default function App() {
  return (
    <View style={styles.container}>
      <Card>
        <View style={styles.user}>
          <Image
            style={styles.image}  
            source={{ uri: 'https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png' }}
          />
          <View style={{flexDirection: 'column'}}>
          <Text style={styles.name}>Sara Harvey</Text>
          <Text style={{paddingLeft:10, color:'grey'}}>April 19, 2021</Text>
          </View>
        </View>  
        <Divider/>
        <View style={{flex:1, justifyContent:'left', flexDirection:'row', padding:10}}>
       <Button style={styles.b1}>
       <Text style={styles.t1} > In progress</Text>
       </Button>
       <Button style={styles.b2}>
       <Text style={{color:'#ff0000', fontSize:12}} > ! High priority</Text>
       </Button> 
       </View>
       <Text style={styles.subject}>Initial Handling of Ticket</Text>
       <Text style={styles.paragraph}>
        This multiplied by hundreds of customer tickets makes a shared inbox insufficient for providing good support. Ticket management software helps you organize all your customer requests and cut through the clutter. It makes the job easier, every step of the way
      </Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  
  user:{
  flex: 1,
  justifyContent: 'left',
  padding:20,
  flexDirection: 'row'
},
  image: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
},
name:{
  paddingLeft:10,
  paddingTop: 10,
  fontSize: 16,
  fontWeight: 'bold',
  color:'black',
  alignContent:'bottom',
},
b1:{
 backgroundColor:'#c0c0c0',
 borderRadius:20,
},
b2:{
  backgroundColor:'#ffffff',
  borderColor:'#c0c0c0',
 borderRadius:3,
 marginLeft:35,
},
t1:{
  color:'#808080',
  fontSize: 10,
  fontWeight: 'normal',
},
subject:{
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'justify'
  },
paragraph: {
    margin: 10,
    fontSize: 14,
    fontWeight: 'normal',
    textAlign: 'justify',
  },
});
