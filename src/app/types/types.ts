import { StaticImageData } from "next/image";

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
type Tstaff = {
    id: number;
    email: string;
    password: string;
    name: string;
    role: string;
    avatar: string | StaticImageData;
};

export type { Tstate, Tstaff, TfakeData };
