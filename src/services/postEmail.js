import { LiveTvRounded } from '@material-ui/icons';
import axios from 'axios';

const postEmail = async (dataBuy) => {
        // var raw = `{\n	\"username\": \"${dataForm.username}"\,\n	\"password\": \"${dataForm.password}\"\n}`;
        let requestOptions = {
            method:'POST',
            url:'4000',
            baseURL:'http://localhost:',
            // data: raw
            data: dataBuy,
        }
        const promise = await axios(requestOptions)
        console.log(promise)
        return promise
    
};

export default postEmail;