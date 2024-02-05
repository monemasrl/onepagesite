import styles from "./page.module.scss";
import { ContextProvider } from "./context/context";
import MainContent from "./components/mainContent";
import {
  getToken,
  fetchSiteData,
  fetchAssetsData,
  fetchStaffData,
} from "./api/getData";
import {
  AuthenticationService,
  Files,
  ItemsSites,
  ItemsSitesStaff,
} from "./generated2";

async function Home() {
  const token = await getToken();
  const data = token && (await fetchSiteData(token));
  const dataSite =
    token &&
    (await data.data.find(
      (item: ItemsSites) => item.id === process.env.SITE_ID
    ));
  const dataAssets: { data: Files[] } = await fetchAssetsData(token);
  const dataStaff: { data: ItemsSitesStaff[] } = await fetchStaffData(token);

  if (dataSite && dataAssets && dataStaff) {
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
}
export default Home;
