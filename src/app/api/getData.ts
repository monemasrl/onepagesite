"use server"

import { AuthenticationService } from "../generated2/services/AuthenticationService";


async function fetchSiteData() {

    if (process.env.URL_PAGE_DATA) {
        const data: Response | undefined = await fetch(process.env.URL_PAGE_DATA)
        const dataJson: any | undefined = await data.json()
        if (dataJson.error) {
            console.log(dataJson.error)
        } {
            return dataJson
        }
    } else {
        console.log('Wrong endpoint ')
    }
}

async function fetchAssetsData() {
    if (process.env.URL_ASSET) {
        const data: Response | undefined = await fetch(process.env.URL_ASSET)
        const dataJson: any = await data.json()
        if (dataJson.error) {
            console.log(dataJson.error)
        } {
            return dataJson
        }
    } else {
        console.log('Wrong endpoint ')
    }
}

async function fetchStaffData() {
    if (process.env.URL_STAFF) {
        const data: Response | undefined = await fetch(process.env.URL_STAFF)
        const dataJson: any = await data.json()
        if (dataJson.error) {
            console.log(dataJson.error)
        } {
            return dataJson
        }
    } else {
        console.log('Wrong endpoint ')
    }

}

async function fetchMapData(indirizzo: string) {
    const data = await fetch(`https://nominatim.openstreetmap.org/search?q=${indirizzo}&format=json&polygon=1&addressdetails=1`)
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => error);

    return data;
}

async function fetchStaffDataByID(id: string) {

    if (process.env.URL_STAFF) {
        const data: Response | undefined = await fetch(process.env.URL_STAFF + "/" + id)
        const dataJson: any = await data.json()

        if (dataJson.error) {
            console.log(dataJson.error)
        } {
            return dataJson
        }
    } else {
        console.log('Wrong endpoint ')
    }

}

export { fetchSiteData, fetchAssetsData, fetchStaffData, fetchMapData, fetchStaffDataByID }