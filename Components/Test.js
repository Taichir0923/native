import { useState } from 'react';
import {View , Text , StyleSheet , TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
export default function Test(){
    const [stete , setStete] = useState(true)
    return <View style={styles.container}>
        <View style={styles.username}>
            <Text style={{fontSize: 30, color: '#fff'}}>Narada</Text>
        </View>
        <View style={styles.tab}></View>
        <View style={styles.navigation}>
            <TouchableOpacity style={[styles.btn , {backgroundColor: '#facc15'}]}>
                <Text style={{color: '#fff'}}>Posts</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
                <Text>Todos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
                <Text>
                    <Icon name='arrowsalt' />
                </Text>
            </TouchableOpacity>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:  '#facc15',
        position: 'relative'
    },
    username: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tab: {
        flex: 2,
        width: '100%',
        backgroundColor: '#fff',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35
    },
    navigation: {
        height: 70,
        width: '100%',
        backgroundColor: '#f3f4f6',
        flexDirection: 'row'
    },
    btn: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})