import { useState , useEffect } from 'react';
import { StyleSheet, Text, View , TouchableOpacity , Image } from 'react-native';
import axios from 'axios';
import { FlatGrid } from 'react-native-super-grid';

const colors = ['#f87171' , '#facc15' , '#4ade80' , '#38bdf8' , '#a78bfa' , '#fb923c' , '#818cf8' , '#f472b6' , '#e879f9' , '#2dd4bf']

export default function Users(props) {
  const {navigation} = props;
  const [users , setUsers] = useState(null);

  useEffect(() => {
    async function getData(){
      const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
      (data && setUsers(data));
    }

    getData();
  } , [users])
  return (
    <View style={styles.container}>
      <View style={styles.thumb}>
        <Image style={{width: '100%' , height: '100%' , resizeMode: 'cover'}} source={{uri: 'https://lumiere-a.akamaihd.net/v1/images/sa_pixar_virtualbg_coco_16x9_9ccd7110.jpeg'}} />
      </View>
      <View style={styles.users}>
        {
          users && <FlatGrid
            showsVerticalScrollIndicator={false}
            itemDimension={130}
            data={users}
            spacing={15}
            renderItem={({item , index}) => (
              <View style={[styles.box, {
                backgroundColor: colors[index]
              }]}>
                <Text style={{fontSize: 16, textAlign: 'center' , fontWeight: 'bold' , color: '#fff'}}>{item.name}</Text>
              </View>
            )}
          />
        }
        <TouchableOpacity onPress={() => navigation.navigate('Test')}>
            <Text>shiljih</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // flex-grow: 1
    flexDirection: 'column',
    alignItems: 'center',    
    justifyContent: 'center',  
  },
  thumb: {
    flex: 1,
    width: '100%',
    backgroundColor: 'red'
  },
  users: {
    flex: 2,
    width: '100%',
    backgroundColor: '#fff',
    padding: 16
  },
  box: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    padding: 5
  }
});

// Todo List hiih
// FlatList , data