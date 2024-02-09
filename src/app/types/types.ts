import { StaticImageData } from "next/image";
import { AuthenticationService } from "../generated2/services/AuthenticationService";

type TfakeData = {
    name: string;
    titolo_testo_societa: string;
    testo_societa: string;
    sede: string;
    cap: string;
    citta: string;
    dati_societari: string;
    capitale: string;
    contatti: {
        telefono: string;
        email: string;
    };
    social: {
        facebook: string;
        instagram: string;
        twitter: string;
    };
    main_image: {
        url: string;
        alt: string;
    };
    logo: {
        url: StaticImageData;
        alt: string;
    };
    background: {
        url: string;
        alt: string;
        type: string;
    };
    staff: Tstaff[];
};

type Tstate = {
    drawer: boolean;
    setDrawer: React.Dispatch<React.SetStateAction<boolean>>;
    dataDrawer: string | null;
    setDataDrawer: React.Dispatch<React.SetStateAction<string | null>>;
};

type TpageData = {
    id: string;
    status: string;
    logo?: { url: StaticImageData, alt: string };
    user_created: string;
    date_created: string;
    user_updated: string;
    date_updated: string;
    hosting_id: string;
    title: string;
    description: string | null;
    featured_image?: { url: StaticImageData, alt: string };
    main: string | null;
    fiscal_code: string;
    company_name: string;
    capitale_sociale: string;
    addresses?: [
        {
            street: string;
            city: string;
            province: string;
            country: string;
            zip: string;
            email: string;
            name: string;
            phone: string;
        }
    ];
    social: [
        {
            type: string;
            address: string;
        }
    ];
    staff: string[];

}
type Tstaff = {
    id: string;
    status: string;
    sort: null;
    user_created: string;
    date_created: string;
    user_updated: string;
    date_updated: string;
    firstname: string;
    lastname: null;
    department: string;
    email: string;
    phone: null;
    image: null;
    site_id: null;

}


type TfileData = {
    id: string;
    storage: string;
    filename_disk: string;
    filename_download: string;
    title: string;
    type: string;
    folder: null;
    uploaded_by: string;
    uploaded_on: string;
    modified_by: null;
    modified_on: string;
    charset: null;
    filesize: string;
    width: number;
    height: number;
    duration: null;
    embed: null;
    description: null;
    location: null;
    tags: null;
    metadata: {};
}
type TfetchData = { dataJson: { data: TpageData[] | undefined }, staffDataJson: Tstaff | undefined, error: string | undefined };
export type { Tstate, TfakeData, TpageData, Tstaff, TfileData, TfetchData };
