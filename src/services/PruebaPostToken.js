import React from 'react';
import axios from 'axios';

const PruebaPostToken = () => {

    // const usersApi = axios.create();


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
    
    const postTokenPrueba = async () => {
        // var details = {
        //     'login': "DN**EC--U001++",
        //     'password': "D1STR1B1D0R4_==_N3G0C13M0$_"
        // };
        
        // var formBody = [];
        // for (var property in details) {
        // var encodedKey = encodeURIComponent(property);
        // var encodedValue = encodeURIComponent(details[property]);
        // formBody.push(encodedKey + "=" + encodedValue);
        // }
        // formBody = formBody.join("&");
        
        // const promise = await fetch('https://myplace.distribuidoranegociemos.com/api.atlas.negociemos/rest/ws/login', {
        // method: 'POST',
        // headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded',
        //     'Content-Length': '<calculated when request is sent>',
        //     'Host': '<calculated when request is sent>',
        //     'User-Agent': 'PostmanRuntime/7.28.4',
        //     'Accept': '*/*',
        //     'Accept-Encoding': 'gzip, deflate, br',
        //     'Connection': 'keep-alive',
        //     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJETioqRUMtLVUwMDErKyIsImlzcyI6Imh0dHA6Ly8xODEuMTQzLjIzNC4xMzg6ODA4MC9hcGkuYXRsYXMubmVnb2NpZW1vcy9yZXN0L3dzL2xvZ2luIiwiaWF0IjoxNjMwMDcxOTQzLCJleHAiOjE2MzAwNzM3NDN9.t9vlMmZJdblADF2VX1DdreLREcjZvX6xUZVCik_1ttk'
        // },
        // body: formBody
        // })

        // fetch('http://181.143.234.138:8080/api.atlas.negociemos/rest/ws', {
        //     method: 'POST',
        //     body: new URLSearchParams({
        //         'login': "DN**EC--U001++",
        //         'password': "D1STR1B1D0R4_==_N3G0C13M0$_"
        //     })
        // });

        const promesa = await axios.post('https://myplace.distribuidoranegociemos.com/api.atlas.negociemos/rest/ws/login', {
            login: "DN**EC--U001++",
            password: "D1STR1B1D0R4_==_N3G0C13M0$_"
        }
        ,{
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJETioqRUMtLVUwMDErKyIsImlzcyI6Imh0dHA6Ly8xODEuMTQzLjIzNC4xMzg6ODA4MC9hcGkuYXRsYXMubmVnb2NpZW1vcy9yZXN0L3dzL2xvZ2luIiwiaWF0IjoxNjMwMDcxOTQzLCJleHAiOjE2MzAwNzM3NDN9.t9vlMmZJdblADF2VX1DdreLREcjZvX6xUZVCik_1ttk',
                "Content-Type" :"application/x-www-form-urlencoded"
            }
        })

        console.log(promesa)
        


















        // var requestOptions = {
        //     method:'POST',
        //     url:'/todos',
        //     baseURL:'https://todos-go.herokuapp.com/api',
        //     // data: raw
        // }
        // const promise = await axios(requestOptions)
        // console.log(promise)
        // return promise

        // console.log(promise)
        // console.log(formBody)
      
    }



    return (
        <div>
            <button onClick={()=> postTokenPrueba()}>Boton de pruebas</button>
        </div>
    );
};

export default PruebaPostToken