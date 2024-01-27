import { StaticImageData } from "next/image";

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

export type { Tstate, Tstaff };
