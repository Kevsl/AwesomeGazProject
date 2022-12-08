import axios from 'axios'

export async function getGazcities(latitude, longitude) {
    return axios
        .get(
            `https://api-adresse.data.gouv.fr/reverse/?lat=${latitude}&lon=${longitude}`
        )
        .then((res) => {
            return res.data.features[0].properties.city
        })
}
