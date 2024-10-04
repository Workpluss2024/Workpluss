import axios from "axios"
import host from "../assets/api/host"

const axiosPOST = async ( endPoint, body ) => {
    try {

        console.log( "----------------------------axiosPOST : START------------------------" )

        console.log( "API to call = " + host.ROOT_HOST + endPoint )
        console.log( "-------------------------------Body : START---------------------------" )
        console.log( body )
        console.log( "-------------------------------Body : END-----------------------------" )
        const response = await axios.post( host.ROOT_HOST + endPoint, body );
        console.log( "----------------------------Response : START------------------------" )
        console.log( response?.data )
        console.log( "----------------------------Response : END------------------------" )
        console.log( "----------------------------axiosPOST : END------------------------" )
        if ( response?.status == 200 ) {
            return response?.data
        } else {

        }

    } catch ( e ) {
        console.log( e )
    }
    console.log( "----------------------------axiosPOST : END------------------------" )
    return null
}


export default axiosPOST