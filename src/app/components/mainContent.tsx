"use client";
import styles from "../page.module.scss";
import Header from "./header";
import Footer from "./footer";
import Drawer from "./drawer";
import { LuPhoneCall, LuFacebook, LuInstagram, LuMail } from "react-icons/lu";
import Image, { StaticImageData } from "next/image";
import AnimatedWrapper from "./animatedWrapper";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { type Files } from "../generated2/models/Files";
import { type ItemsSites } from "../generated2/models/ItemsSites";
import { type ItemsSitesStaff } from "../generated2/models/ItemsSitesStaff";

type Taddresses = {
  city: string;
  country: string;
  email: string;
  name: string;
  phone: string;
  province: string;
  street: string;
  zip: string;
};
type Tsocial = {
  address: string;
  type: string;
};

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

  function staffData(): (ItemsSitesStaff | undefined)[] | undefined {
    return data.staff?.map((item) =>
      staff?.find((staffItem) => staffItem.id === item)
    );
  }

  if (data) {
    console.log(data);
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
              <Header logo={logo} name={data.company_name} />
              <main className={styles.content}>
                <section className={styles.content__intro}>
                  {data.featured_image && (
                    <Image
                      src={`https://cmdb.service.monema.dev/assets/${featured_image?.filename_disk}`}
                      alt={featured_image?.description || "immagine principale"}
                      width={500}
                      height={500}
                      placeholder="blur"
                      blurDataURL="data:image/svg+xml,%3Csvg viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m25 38c-5.1 0-9.7-3-11.8-7.6l1.8-.8c1.8 3.9 5.7 6.4 10 6.4 6.1 0 11-4.9 11-11s-4.9-11-11-11c-4.6 0-8.5 2.8-10.1 7.3l-1.9-.7c1.9-5.2 6.6-8.6 12-8.6 7.2 0 13 5.8 13 13s-5.8 13-13 13z'/%3E%3Cpath d='m20 22h-8v-8h2v6h6z'/%3E%3C/svg%3E"
                    />
                  )}
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
                        <ul>
                          {data.addresses.map(
                            (address: Taddresses, index: number) => (
                              <li key={index}>
                                <p>{address.street}</p>
                                <p>{address.city}</p>
                                <p>{address.zip}</p>
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
                    {data.social && (
                      <li>
                        <h4>Seguici</h4>
                        <ul className={styles.content__dati__social}>
                          {data.social.map((social: Tsocial, index: number) => (
                            <li key={index}>
                              <span>
                                {social.type === "facebook" ? (
                                  <LuFacebook />
                                ) : (
                                  <LuInstagram />
                                )}
                              </span>
                              <a
                                href={social.address}
                                target="_blank"
                                rel="noreferrer noopener"
                              >
                                {social.type}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                    )}
                  </ul>
                </section>
              </main>
              <Footer />
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
