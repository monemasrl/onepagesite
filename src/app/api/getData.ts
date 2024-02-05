import { AuthenticationService, ItemsSites } from "../../generated2";

async function getToken() {

    if (process.env.URL_LOGIN) {
        console.log(process.env.URL_LOGIN);
        const response = await fetch(process.env.URL_LOGIN,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "email": "dedomini@monema.it",
                    "password": "Dedomini2024!",
                    "mode": "json",
                    "otp": "string"
                })
            }
        );
        const data: any = await response.json();
        if (data.error) {
            console.log(data.error);
        } else {
            return data;
        }
    }
}

async function fetchSiteData(token: AuthenticationService) {
    if (token && process.env.URL_PAGE_DATA) {
        const data: Response = await fetch(process.env.URL_PAGE_DATA)
        const dataJson: any = await data.json()
        if (dataJson.error) {
            console.log(dataJson.error)
        } {
            return dataJson
        }
    } else {
        console.log('No token')
    }
}

async function fetchAssetsData(token: AuthenticationService) {
    if (token && process.env.URL_ASSET) {
        const data = await fetch(process.env.URL_ASSET)
        const dataJson: any = await data.json()
        if (dataJson.error) {
            console.log(dataJson.error)
        } {
            return dataJson
        }
    } else {
        console.log('No token')
    }
}

async function fetchStaffData(token: AuthenticationService) {
    if (token && process.env.URL_STAFF) {
        const data = await fetch(process.env.URL_STAFF)
        const dataJson: any = await data.json()
        if (dataJson.error) {
            console.log(dataJson.error)
        } {
            return dataJson
        }
    } else {
        console.log('No token')
    }

}

export { getToken, fetchSiteData, fetchAssetsData, fetchStaffData }