import { Api_social_url } from "../constants.mjs";

const action = "/auth/register";
const method = "POST";


export async function register(profile) {
    const registerURL = Api_social_url + action;
    console.log(registerURL)

    
    
    const response = await fetch(registerURL, {
        headers: {
            "Content-Type": "application/json"
        },
        method,
        body: JSON.stringify(profile), 
    })

    const results = await response.json()
    console.log(results)
}