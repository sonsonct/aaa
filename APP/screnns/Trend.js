import { Text, View,Image, StyleSheet, TouchableOpacity , StatusBar} from 'react-native'
import React, { Component, useEffect } from 'react'
import Quantam from '../component/Quantam';
import { ScrollView } from 'react-native-virtualized-view';
import Nong24h from '../component/Nong24h';
import Gocnhinvaphantich from '../component/Gocnhinvaphantich';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Trend = (props) => {
  console.log(props.route.params.item);
  // const save=()=>{
  //   const product={
  //     anh: props.route.params.item.anh,
  //     noi_dung: props.route.params.item.noi_dung,
  //     gia: props.route.params.item.gia,

  //   };
  //   AsyncStorage.setItem('product', JSON.stringify(product));
  // }
  return (
    <ScrollView>
      <StatusBar
      animated={true}
      backgroundColor="#015f71"
    />
    <View style={{ width: '100%', height: 60, backgroundColor: '#015f71', justifyContent: 'center' }}>
      <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Giỏ Hàng</Text>
    </View>
      <View style={styles.bai_bao}>
        <Image
          source={{ uri: props.route.params.item.anh }}
          resizeMode="contain"
          style={styles.img} />
        <View style={styles.contentContainer}>
          <Text style={styles.text_tieu_de}>{props.route.params.item.tieu_de}</Text>
          <Text numberOfLines={1} style={styles.text_noi_dung}>{props.route.params.item.noi_dung}</Text>
          <Text style={styles.text_gia}>{props.route.params.item.gia} đ</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <Image
            source={{ uri: props.route.params.item.logo }}
            resizeMode="contain"
            style={styles.imglogo} />
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bai_bao: {
    width: '100%',
    marginTop: 10,
    padding: 20
  },
  contentContainer: {
    fontWeight: 'bold',
    fontSize: 17,
    flex: 0.65,
  },
  text_tieu_de: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'justify'
  },
  img: {
    flex: 0.35,
    width: '100%',
    height: 120,
    borderRadius: 8
  },
  imglogo: {
    width: 55,
    height: 25
  }
})
export default Trend;