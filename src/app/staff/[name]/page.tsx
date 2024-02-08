type Tprops = {
  params: { name: string };
  searchParams: { id: string };
};
import styles from "./style.module.scss";
import StaffData from "../../components/staffData";
import { fetchStaffDataByID, getToken } from "../../api/getData";

async function staffPage(props: Tprops) {
  const token = await getToken();
  const staffData = await fetchStaffDataByID(token, props.searchParams.id);
  if (staffData.error) {
    return <div>Errore nel caricamento dei dati</div>;
  }
  return (
    <div className={styles.wrapperPageStaff}>
      <StaffData />
    </div>
  );
}

export default staffPage;
