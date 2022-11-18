import { Text, View, Image } from 'react-native'
import React, { Component } from 'react'
import { ScrollView } from 'react-native-virtualized-view';
import Suagoiy from '../component/Sua_goi_y';
const Trend = () => {
  return (
    <ScrollView>
      <View style={{ width: '100%', height: 60, backgroundColor: '#015f71', justifyContent: 'center' }}>
        <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Gợi ý</Text>
      </View>
      <Suagoiy/>
    </ScrollView>
  )
}
export default Trend;