import { Text, View, Image } from 'react-native'
import { CardStyle } from '../assets/style/Card'
import picture1 from '../assets/images/user1.jpg'

export const Card = (props) => {
    return (
        <View style={CardStyle.card} key={props.id}>
            <Image source={props.image} style={CardStyle.cardImage} />
            <Text style={CardStyle.cardText}>{props.title}</Text>
        </View>
    )
}
