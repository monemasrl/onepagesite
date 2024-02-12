"use server"

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
    if (process.env.URL_ASSETS) {
        const data: Response | undefined = await fetch(process.env.URL_ASSETS)
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
        const data: Response | undefined = await fetch(process.env.URL_STAFF, {})
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



export { fetchSiteData, fetchAssetsData, fetchStaffData, fetchStaffDataByID, }