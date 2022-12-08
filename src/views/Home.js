import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
} from 'react-native'
import { Card } from '../components/Card'
import { HomeStyle } from '../assets/style/Home'
import Geolocation from 'react-native-geolocation-service'

import React, { useEffect, useState } from 'react'
import { getGazcities } from '../service/cities'
import { fetchGazPrices } from '../service/gasService'

const Home = ({ navigation }) => {
    const [latitude, setLatitude] = useState()
    const [longitude, setLongitude] = useState()
    const [city, setCity] = useState('')
    const [departement, setDepartement] = useState('')

    function getLocation() {
        Geolocation.getCurrentPosition(
            (position) => {
                setLatitude(position.coords.latitude)
                setLongitude(position.coords.longitude)
            },
            (error) => {
                // See error code charts below.
                console.log(error.code, error.message)
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        )
    }

    useEffect(() => {
        if (latitude && longitude) {
            getGazcities(latitude, longitude).then((res) => {
                if (res) {
                    setCity(res)
                    getGas(res)
                }
            })
        }
    }, [latitude, longitude])

    function getGas(value) {
        if (value) {
            console.log('api call')
            fetchGazPrices(city)
            console.log('api done')
        }
    }

    return (
        <SafeAreaView style={HomeStyle.container}>
            <Text style={HomeStyle.title}>Home</Text>
            <TouchableOpacity onPress={getLocation}>
                <Text>Go Fetch gas stations</Text>
            </TouchableOpacity>
            <ScrollView>
                <View style={HomeStyle.scrollView}></View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Home
