import { AuthenticationService } from "../generated2/services/AuthenticationService";

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
            console.log(data.error, 'token error');
        } else {

            return data;
        }
    }
}

async function fetchSiteData(token: AuthenticationService) {
    if (token && process.env.URL_PAGE_DATA) {
        const data: Response | undefined = await fetch(process.env.URL_PAGE_DATA)
        const dataJson: any | undefined = await data.json()
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
        const data: Response | undefined = await fetch(process.env.URL_ASSET)
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
        const data: Response | undefined = await fetch(process.env.URL_STAFF)
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

async function fetchMapData(indirizzo: string) {
    const data = await fetch(`https://nominatim.openstreetmap.org/search?q=${indirizzo}&format=json&polygon=1&addressdetails=1`)
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => error);

    return data;
}

async function fetchStaffDataByID(token: AuthenticationService, id) {
    if (token && process.env.URL_STAFF) {
        const data: Response | undefined = await fetch(process.env.URL_STAFF)
        const dataJson: any = await data.json()
        const staff = dataJson.data.find((item: any) => item.id === id)
        if (dataJson.error) {
            console.log(dataJson.error)
        } {
            return staff
        }
    } else {
        console.log('No token')
    }

}

export { getToken, fetchSiteData, fetchAssetsData, fetchStaffData, fetchMapData, fetchStaffDataByID }