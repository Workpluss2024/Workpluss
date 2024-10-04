import axios from "axios"
import host from "../assets/api/host"

const axiosGET = async ( endPoint ) => {
    try {

        console.log( "----------------------------axiosGET : START------------------------" )

        console.log( "API to call = " + host.ROOT_HOST + endPoint )
        const response = await axios.get( host.ROOT_HOST + endPoint );
        console.log( "----------------------------Response : START------------------------" )
        console.log( response?.data )
        console.log( "----------------------------Response : END------------------------" )
        console.log( "----------------------------axiosGET : END------------------------" )
        if ( response?.status == 200 ) {
            return response?.data
        } else {

        }

    } catch ( e ) {
        console.log( e )
    }
    console.log( "----------------------------axiosGET : END------------------------" )
    return null
}

export default axiosGET