type Tprops = {
  params: { name: string };
  searchParams: { id: string };
};

import styles from "./style.module.scss";
import StaffData from "../../components/staffData";
import { fetchStaffDataByID } from "../../api/getData";
import { ItemsSitesStaff } from "../../generated2/models/ItemsSitesStaff";

export async function generateStaticParams() {
  if (process.env.URL_STAFF) {
    const staff: any = await fetch(process.env.URL_STAFF).then(
      (res: Response) => res.json()
    );

    return staff.data.map((staff: any) => ({
      name: staff?.firstname,
    }));
  }
}

async function StaffPage({ params }: Tprops) {
  //const staffData = await fetchStaffDataByID(props.searchParams.id);

  return (
    <div className={styles.wrapperPageStaff}>
      <StaffData />
    </div>
  );
}

export default StaffPage;
