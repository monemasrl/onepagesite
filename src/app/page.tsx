import styles from "./page.module.scss";
import { ContextProvider } from "./context/context";
import MainContent from "./components/mainContent";
import { fetchSiteData, fetchAssetsData, fetchStaffData } from "./api/getData";

import { Files } from "./generated2/models/Files";
import { ItemsSites } from "./generated2/models/ItemsSites";
import { ItemsSitesStaff } from "./generated2/models/ItemsSitesStaff";

async function Home() {
  const dataAssets: { data: Files[] } = await fetchAssetsData();
  const dataStaff: { data: ItemsSitesStaff[] } = await fetchStaffData();

  const data = await fetchSiteData();

  const dataSite = await data.data.find(
    (item: ItemsSites) => item.id === process.env.SITE_ID_MONEMA
  );

  return (
    <div className={styles.main}>
      <ContextProvider>
        <>
          <MainContent
            data={dataSite}
            assets={dataAssets.data}
            staff={dataStaff.data}
          />
        </>
      </ContextProvider>
    </div>
  );
}
export default Home;
