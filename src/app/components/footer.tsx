"use client";

import style from "./components.module.scss";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

async function fetchMapData(indirizzo: string) {
  console.log("fetchMapData" + indirizzo);
  const data = await fetch(
    `https://nominatim.openstreetmap.org/search?q=${indirizzo}&format=json&polygon=1&addressdetails=1`
  )
    .then((response) => response.json())
    .then((data) => data)
    .catch((errore) => console.log(errore + "error fetching data map"));

  return data;
}

const Mappa = dynamic(() => import("./map"));

function Footer({ address }: { address: string | null }) {
  const [mapdata, setMapdata] = useState<any | undefined>([]);
  const [error, setError] = useState("");
  console.log(address, "address");
  useEffect(() => {
    async function fetchData(address: string) {
      const data: any = await fetchMapData(address);

      if (data) {
        console.log(data, "dati mappa");
        setMapdata(data);
      } else {
        setError(data.error);
      }
    }
    if (address && address.length) {
      fetchData(address);
    }
  }, [address]);

  return (
    <footer className={style.footer}>
      {mapdata.length > 0 ? (
        <Mappa
          position={[parseFloat(mapdata[0].lat), parseFloat(mapdata[0].lon)]}
          zoom={13}
        />
      ) : (
        <div
          style={{ height: "100%", textAlign: "center", paddingTop: "2rem" }}
        >
          {error ? "Errore nel caricamento dati mappa" : "Loading..."}
        </div>
      )}
    </footer>
  );
}
export default Footer;
