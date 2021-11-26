import axios from "axios";

var BASE_URL_LOCAL = "http://localhost:5000";
var BASE_URL_SERVER = "http://134.209.22.166:5000";
var BASE_URL = BASE_URL_LOCAL;

axios.defaults.baseURL = BASE_URL + "/api/v1";

export async function addWallets(accounts) {
    await axios.post('/wallets/adds', {
        'wallets': accounts
    }).then((response) => {
        return response;
    }).catch((err) => {
        console.log(err)
        return err;
    })
}

// const Api = {
//     addWallets: async (accounts) => {
//         await axios({
//             method: 'post',
//             url: "/wallets/adds",
//             params: {
//                 wallets: accounts
//             }
//         }).then((response) => {
//             return response;
//         }).catch((err) => {
//             console.log(err)
//             return err;
//         })
//     }
// }

// module.exports = Api;