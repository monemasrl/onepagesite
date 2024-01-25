
type Tstate = {
    drawer: boolean;
    setDrawer: React.Dispatch<React.SetStateAction<boolean>>;
    dataDrawer: string | null;
    setDataDrawer: React.Dispatch<React.SetStateAction<string | null>>;
};

export type { Tstate };
