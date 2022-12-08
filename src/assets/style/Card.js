import { StyleSheet } from 'react-native'

export const CardStyle = (StyleSheet.createstyle = StyleSheet.create({
    card: {
        height: '25vh',
        width: '30%',
        marginVertical: 30,
        backgroundColor: '#14213D',
        borderRadius: 25,
    },

    cardImage: {
        width: '100%',
        height: '20vh',
        borderTopEndRadius: 25,
        borderTopStartRadius: 25,
    },
    cardText: {
        textAlign: 'center',
        color: '#fff',
        marginVertical: 5,
    },
}))
