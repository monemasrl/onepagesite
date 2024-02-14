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
import { Metadata } from "next/types";
import { fetchStaffData, fetchStaffDataByID } from "../../api/getData";
import { ItemsSites } from "../../generated2/models/ItemsSites";

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

    return {
      data: data,
      next: {
        slug: staff.data[staff.data.indexOf(data) + 1]?.slug,
        name:
          staff.data[staff.data.indexOf(data) + 1]?.firstname +
          " " +
          staff.data[staff.data.indexOf(data) + 1]?.lastname,
      },
      prev: {
        slug: staff.data[staff.data.indexOf(data) - 1]?.slug,
        name:
          staff.data[staff.data.indexOf(data) - 1]?.firstname +
          " " +
          staff.data[staff.data.indexOf(data) - 1]?.lastname,
      },
    };
  }
}
export async function generateMetadata({
  params,
}: Tprops): Promise<Metadata | undefined> {
  if (process.env.URL_STAFF) {
    const data = await fetch(process.env.URL_STAFF);
    const dataJson = await data.json();
    console.log(dataJson, "dataSite");
    const dataSite: ItemsSitesStaff = await dataJson?.data.find(
      (item: ItemsSitesStaff) => item.slug === params.slug
    );

    if (!dataSite) {
      return {
        title: "staff page",
        description: "sooper cool staff page, but not really",
      };
    }
    return {
      title: dataSite.firstname + " " + dataSite.lastname,
      description: dataSite.department,
      openGraph: {
        title: dataSite.firstname + " " + dataSite.lastname,
        description: dataSite.department || undefined,
        type: "website",
        url: process.env.SITE_URL + "/staff/" + dataSite.slug,
        images: [
          {
            url: `https://cmdb.service.monema.dev/assets/${dataSite.image}.jpg`,

            alt: dataSite.firstname + " " + dataSite.lastname,
          },
        ],
      },
    };
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
        {data && <StaffData data={data} />}
      </div>
    </ContextProvider>
  );
}

export default StaffPage;
