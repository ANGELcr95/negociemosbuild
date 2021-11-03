import React from 'react';
import axios from 'axios';

const PruebaPostToken = () => {

    const usersApi = axios.create();


    // const postTokenPrueba = async () => {
    //     // const data = {
    //     //     http({
    //     //         method: 'post',
    //     //         url: 'http://127.0.0.1:10111/heartbeat',
    //     //         headers: {
    //     //           'Content-Type': 'application/x-www-form-urlencoded'
    //     //         },
    //     //         data: JSON.stringify(data)
    //     //     })
    //     // }
    //     // console.log("hice pruba")

        
    // usersApi.get("https://reqres.in/api/users?page=2")
    // .then( resp =>{
    //     console.log(resp)
    // })

    // }
    
    const postTokenPrueba = () => {
        var details = {
            'login': "DN**EC--U001++",
            'password': "D1STR1B1D0R4_==_N3G0C13M0$_"
        };
        
        var formBody = [];
        for (var property in details) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        
        fetch('http://181.143.234.138:8080/api.atlas.negociemos/rest/ws' + '/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formBody
        })

        // fetch('http://181.143.234.138:8080/api.atlas.negociemos/rest/ws', {
        //     method: 'POST',
        //     body: new URLSearchParams({
        //         'login': "DN**EC--U001++",
        //         'password': "D1STR1B1D0R4_==_N3G0C13M0$_"
        //     })
        // });

    
      
    }

    return (
        <div>
            <button onClick={()=> postTokenPrueba()}>Boton de pruebas</button>
        </div>
    );
};

export default PruebaPostToken