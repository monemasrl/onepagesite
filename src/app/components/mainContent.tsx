"use client";
import styles from "../page.module.scss";
import Header from "./header";
import Footer from "./footer";
import Drawer from "./drawer";
import { LuPhoneCall, LuFacebook, LuInstagram, LuMail } from "react-icons/lu";
import AnimatedWrapper from "./animatedWrapper";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { type Files } from "../generated2/models/Files";
import { type ItemsSites } from "../generated2/models/ItemsSites";
import { type ItemsSitesStaff } from "../generated2/models/ItemsSitesStaff";
import LoadImage from "./loadImage";

type Taddresses = {
  city: string;
  Numero: string;
  country: string;
  email: string;
  name: string;
  phone: string;
  province: string;
  street: string;
  zip: string;
};

function createAddress(street: string, city: string, numero: string): string {
  const streetsplit = street.split(" ");
  const address = streetsplit.join("+");
  const citySplit = city.split(" ");
  const cityAddress = citySplit.join("+");
  const addressString = `${address}+${numero},+${cityAddress}`;
  return addressString;
}

function MainContent({
  data,
  assets,
  staff,
}: {
  data: ItemsSites;
  assets?: Files[];
  staff?: ItemsSitesStaff[];
}) {
  const [hideInitial, setHideInitial] = useState(true);
  const [currentAddress, setCurrentAddress] = useState<string>(() => {
    if (data.addresses) {
      return createAddress(
        data.addresses[0].street,
        data.addresses[0].city,
        data.addresses[0].Numero
      );
    } else {
      return "";
    }
  });

  const [activeAddressList, setActiveAddressList] = useState<string>("");

  function staffData(): (ItemsSitesStaff | undefined)[] | undefined {
    return data.staff?.map((item) =>
      staff?.find((staffItem) => staffItem.id === item)
    );
  }

  if (data) {
    console.log(data, "currentAddress");
    const logo: Files | undefined = assets?.find(
      (item) => item.id === data.logo
    );
    const featured_image: Files | undefined = assets?.find(
      (item) => item.id === data.featured_image
    );

    return (
      <>
        <AnimatedWrapper
          logo={logo}
          name={data.company_name}
          sede={data.addresses && data.addresses[0].street}
          contatti={{
            telefono: data.addresses && data.addresses[0].phone,
            email: data.addresses && data.addresses[0].email,
          }}
          citta={data.addresses && data.addresses[0].city}
          hideInitial={hideInitial}
          setHideInitial={setHideInitial}
        />
        <AnimatePresence>
          {!hideInitial && (
            <motion.div
              className={styles.wrapper}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Header
                logo={logo}
                name={data.company_name}
                social={data.social}
              />
              <main className={styles.content}>
                <section className={styles.content__intro}>
                  <div className={styles.content__intro__wrapperImage}>
                    {data.featured_image && (
                      <LoadImage
                        src={`https://cmdb.service.monema.dev/assets/${featured_image?.filename_disk}`}
                        alt={
                          featured_image?.description || "immagine principale"
                        }
                        width={330}
                        height={180}
                      />
                    )}
                  </div>
                  <div className={styles.content__intro__data}>
                    <h2>{data.title}</h2>
                    <p>{data.description}</p>
                  </div>
                </section>
                <section className={styles.content__dati}>
                  <ul>
                    <li>
                      <h4>Sedi</h4>
                      {data.addresses && (
                        <ul className={styles.sedi}>
                          {data.addresses.map(
                            (address: Taddresses, index: number) => (
                              <li
                                key={index}
                                className={`${
                                  address.street === activeAddressList &&
                                  styles.activeListItem
                                } `}
                                onClick={() => {
                                  setActiveAddressList(address.street);
                                  setCurrentAddress(
                                    createAddress(
                                      address.street,
                                      address.city,
                                      address.Numero
                                    )
                                  );
                                }}
                              >
                                <ul>
                                  <li>
                                    <sup>{address.name}</sup>
                                    <span>
                                      {address.street}&nbsp;{address.Numero},{" "}
                                      {address.city}
                                    </span>
                                  </li>
                                </ul>
                              </li>
                            )
                          )}
                        </ul>
                      )}
                    </li>
                    <li>
                      <h4>Dati Societari</h4>
                      <p>p.iva {data.fiscal_code}</p>
                      {data.capitale_sociale && (
                        <p>capitale: {data.capitale_sociale}</p>
                      )}
                    </li>
                    {data.addresses && (
                      <li>
                        <h4>Contatti</h4>
                        <p>
                          <span>
                            <LuPhoneCall />
                          </span>
                          {data.addresses[0].phone && data.addresses[0].phone}
                        </p>
                        <p>
                          <span>
                            <LuMail />
                          </span>
                          {data.addresses[0].email && data.addresses[0].email}
                        </p>
                      </li>
                    )}
                  </ul>
                </section>
              </main>
              <Footer address={currentAddress} />
              <Drawer staff={staffData()} />
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  } else {
    return null;
  }
}

export default MainContent;
