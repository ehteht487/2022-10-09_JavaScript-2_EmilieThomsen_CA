import { Api_social_url } from "../constants.mjs";

import * as storage from "../../storage/index.mjs";


const action = "/auth/login";
const method = "POST";


export async function login(profile) {
    const loginURL = Api_social_url + action;
    console.log(loginURL)

    
    
    const response = await fetch(loginURL, {
        headers: {
            "Content-Type": "application/json"
        },
        method,
        body: JSON.stringify(profile), 
    })

    const {accessToken,...user} = await response.json()
    
    
    storage.saveItem("token", accessToken)
    storage.saveItem("profile", user)

}
