import styles from "./page.module.scss";
import { ContextProvider } from "./context/context";
import MainContent from "./components/mainContent";
import {
  getToken,
  fetchSiteData,
  fetchAssetsData,
  fetchStaffData,
} from "./api/getData";

import { Files } from "./generated2/models/Files";
import { ItemsSites } from "./generated2/models/ItemsSites";
import { ItemsSitesStaff } from "./generated2/models/ItemsSitesStaff";

async function Home() {
  const token: any | undefined = await getToken();
  console.log(token, "token");
  const data: any | undefined = await fetchSiteData(token);
  console.log(data, "data");
  const dataSite: any | undefined = await data.data.find(
    (item: ItemsSites) => item.id === process.env.SITE_ID
  );

  const dataAssets: { data: Files[] | undefined } = await fetchAssetsData(
    token
  );
  const dataStaff: { data: ItemsSitesStaff[] | undefined } =
    await fetchStaffData(token);

  const [assets, staff, site] = await Promise.all([
    fetchAssetsData(token),
    fetchStaffData(token),
    fetchSiteData(token),
  ]);

  if (assets && staff && site) {
    return (
      <div className={styles.main}>
        <ContextProvider>
          <>
            <MainContent data={site} assets={assets.data} staff={staff.data} />
          </>
        </ContextProvider>
      </div>
    );
  } else {
    return <p>Caricamento...</p>;
  }
}
export default Home;
