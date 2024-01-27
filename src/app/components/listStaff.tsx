import { useEffect, useReducer } from "react";
import style from "./components.module.scss";
import Image from "next/image";
import avatar from "../../../public/image/avatar.webp";
import { Tstaff } from "../types/types";
function ListStaff({ list }: { list: Tstaff[] }) {
  return (
    <section className={style.listStaff}>
      <>
        <h3>Il nostro staff</h3>
        {list ? (
          <ul>
            {list.map((staff: Tstaff) => (
              <li key={staff.id} className={style.listStaff__item}>
                <Image src={avatar} alt="avatar" width={100} height={100} />
                <ul>
                  <li className={style.listStaff__item__name}>{staff.name}</li>
                  <li>{staff.role}</li>
                  <li>{staff.email}</li>
                </ul>
              </li>
            ))}
          </ul>
        ) : (
          <p>Non ci sono dati da mostrare</p>
        )}
      </>
    </section>
  );
}

export default ListStaff;
