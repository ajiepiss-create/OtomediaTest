import React from "react";
import { View, Text, Image,ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import shop from "./shop.jpg"
import aji from "./aji.jpg"
import produk1 from "./produk1.jpg"
import produk2 from "./produk2.jpg"
import iconplus from "./iconplus.jpg"
import minus from "./minus.jpg"


const ListScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#f8d9fbff' }}>
            <View style={{ alignItems: 'center', alignContent: 'flex-end', marginTop: 50 }}>
                <View style={{ elevation: 5, borderRadius: 50 }}>
                    <Image source={aji} style={{ width: 100, height: 100, marginRight: 10, borderRadius: 50, }} />
                </View>
            </View>
            <View style={{ backgroundColor: '#975de2ff', width: 350, height: 150, marginTop: 40, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginLeft: 22, borderRadius: 20, elevation: 20 }}>
                <Image source={shop} />
                <View style={{ marginRight: 30, alignItems: 'center' }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 25 }}>Big Sale</Text>
                    <Text style={{ color: '#FFFFFF', fontSize: 10 }}>Get The Trendy</Text>
                    <Text style={{ color: '#FFFFFF', fontSize: 10 }}>Fashion at a discount</Text>
                    <Text style={{ color: '#FFFFFF', fontSize: 10 }}>of up to 50%</Text>
                </View>
            </View>
            <View>
                <ScrollView style={{marginBottom:50}}>
                    <View style={{ marginLeft: 10, marginTop: 30, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around' }}>
                        <View style={{ alignItems: 'center' }}>
                            <Image source={produk1} style={{ width: 100, height: 200, borderRadius: 20 }} />
                            <Text style={{ fontSize: 17, color: '#000000', paddingTop: 10 }}>Rp.100.000</Text>
                            <View style={{ backgroundColor: '#FFFFFF', width: 100, height: 40, justifyContent: 'space-around', alignItems: 'center', marginTop: 10, borderRadius: 10, flexDirection: 'row' }}>
                                <TouchableOpacity>
                                    <Image source={iconplus} style={{ width: 30, height: 30 }} />
                                </TouchableOpacity>
                                <Text style={{ fontSize: 17, color: '#000000' }}>0</Text>
                                <TouchableOpacity>
                                    <Image source={minus} style={{ width: 30, height: '30' }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center', }}>
                            <Image source={produk2} style={{ width: 100, height: 200, borderRadius: 20 }} />
                            <Text style={{ fontSize: 17, color: '#000000', paddingTop: 10 }}>Rp.50.000</Text>
                            <View style={{ backgroundColor: '#FFFFFF', width: 100, height: 40, justifyContent: 'space-around', alignItems: 'center', marginTop: 10, borderRadius: 10, flexDirection: 'row' }}>
                                <TouchableOpacity>
                                    <Image source={iconplus} style={{ width: 30, height: 30 }} />
                                </TouchableOpacity>
                                <Text style={{ fontSize: 17, color: '#000000' }}>0</Text>
                                <TouchableOpacity>
                                    <Image source={minus} style={{ width: 30, height: '30' }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginLeft: 10, marginTop: 30, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around' }}>
                        <View style={{ alignItems: 'center' }}>
                            <Image source={produk1} style={{ width: 100, height: 200, borderRadius: 20 }} />
                            <Text style={{ fontSize: 17, color: '#000000', paddingTop: 10 }}>Rp.100.000</Text>
                            <View style={{ backgroundColor: '#FFFFFF', width: 100, height: 40, justifyContent: 'space-around', alignItems: 'center', marginTop: 10, borderRadius: 10, flexDirection: 'row' }}>
                                <TouchableOpacity>
                                    <Image source={iconplus} style={{ width: 30, height: 30 }} />
                                </TouchableOpacity>
                                <Text style={{ fontSize: 17, color: '#000000' }}>0</Text>
                                <TouchableOpacity>
                                    <Image source={minus} style={{ width: 30, height: '30' }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center', }}>
                            <Image source={produk2} style={{ width: 100, height: 200, borderRadius: 20 }} />
                            <Text style={{ fontSize: 17, color: '#000000', paddingTop: 10 }}>Rp.50.000</Text>
                            <View style={{ backgroundColor: '#FFFFFF', width: 100, height: 40, justifyContent: 'space-around', alignItems: 'center', marginTop: 10, borderRadius: 10, flexDirection: 'row' }}>
                                <TouchableOpacity>
                                    <Image source={iconplus} style={{ width: 30, height: 30 }} />
                                </TouchableOpacity>
                                <Text style={{ fontSize: 17, color: '#000000' }}>0</Text>
                                <TouchableOpacity>
                                    <Image source={minus} style={{ width: 30, height: '30' }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}


export default ListScreen;