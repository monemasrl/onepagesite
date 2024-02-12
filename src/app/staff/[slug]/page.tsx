type Tprops = {
  params: { slug: string };
  searchParams: { id: string };
};
type TitemSitesStaff = ItemsSitesStaff & { image: string | StaticImageData };

import styles from "./style.module.scss";
import StaffData from "../../components/staffData";
import { ItemsSitesStaff } from "../../generated2/models/ItemsSitesStaff";
import { notFound } from "next/navigation";
import { type StaticImageData } from "next/image";
import { ContextProvider } from "../../context/context";
export async function generateStaticParams() {
  if (process.env.URL_STAFF) {
    const staff: any = await fetch(process.env.URL_STAFF).then(
      (res: Response) => res.json()
    );
    return staff.data.map((staffItem: any) => ({
      slug: staffItem?.slug,
    }));
  }
}

async function getDataStaff(slug: string) {
  if (process.env.URL_STAFF) {
    const staff: any = await fetch(process.env.URL_STAFF).then(
      (res: Response) => res.json()
    );

    const data: TitemSitesStaff = staff.data.find(
      (item: TitemSitesStaff) => item.slug === slug
    );

    return data;
  }
}

async function StaffPage({ params }: Tprops) {
  const data = await getDataStaff(params.slug);

  if (!data) {
    notFound();
  }

  return (
    <ContextProvider>
      <div className={styles.wrapperPageStaff}>
        <StaffData data={data} />
      </div>
    </ContextProvider>
  );
}

export default StaffPage;
