import { Text, View, ActivityIndicator, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const Suatuoi = () => {
    const [search, setsearch] = useState('');
    const [data, setdata] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const navigation = useNavigation();

    useEffect(() => {
        getList();
        return () => {

        }
    }, []);
    const getList = () => {
        return fetch('https://63772cd181a568fc250e07f2.mockapi.io/api_sua_tuoi')
            .then((response) => response.json())
            .then((responseJson) => {
                setdata(responseJson);
            }
            ).catch((erro) => {
                console.log('Erro', erro);
            }).finally(() => { setisLoading(false) })
    }
    const renderItem = ({ item, index }) => (
        <>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Detail', { item })
                    console.log(item.id)
                }
                }
            >
                <View style={styles.bai_bao}>
                    <Image
                        source={{ uri: item.anh }}
                        style={styles.img} />
                    <View style={styles.contentContainer}>
                        <Text numberOfLines={2} style={styles.text_tieu_de}>{item.tieu_de}</Text>
                        <Text style={styles.text_gia}>{item.gia} đ</Text>
                        <Text numberOfLines={1} style={styles.text_noi_dung}>{item.mo_ta}</Text>
                    </View>
                    <View>
                    </View>
                </View>
            </TouchableOpacity>
        </>
    )
    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row'}}>
                <Image
                    style={{ height: 70, width: 100, marginTop: 30 }}
                    source={require('../img/suatuoi.webp')}
                    resizeMode="contain"
                />
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#00ab90',paddingTop:55 }}>SỮA TƯƠI</Text>
            </View>

            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    data={data.filter(eachBao => eachBao.tieu_de.toLocaleLowerCase().includes(search.toLocaleLowerCase()))}
                    renderItem={renderItem}
                    horizontal
                    keyExtractor={item => `key-${item.id}`}
                />
            )}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
    bai_bao: {
        borderRadius: 10,
        width: 200,
        marginRight: 10,
        marginTop: 20
    },
    contentContainer: {
        fontWeight: 'bold',
        fontSize: 17,
        flex: 0.65,
        paddingHorizontal: 5,
    },
    text_tieu_de: {
        fontWeight: 'bold',
        fontSize: 16,
        color: "#f2703c"
    },
    img: {
        flex: 0.35,
        width: '100%',
        height: 200,
        borderRadius: 8
    },
    text_gia: {
        fontSize: 16,
        textAlign: 'center',
        color: '#3d6aaf',
        fontWeight: 'bold'
    }
})
export default Suatuoi;