import { useEffect, useReducer } from "react";
import style from "./components.module.scss";
import Image from "next/image";
import avatar from "../../../public/image/avatar.webp";
import { ItemsSitesStaff } from "../generated2";

function ListStaff({
  list,
}: {
  list: (ItemsSitesStaff | undefined)[] | undefined;
}) {
  return (
    <section className={style.listStaff}>
      <>
        <h3>Il nostro staff</h3>
        {list ? (
          <ul>
            {list.map(
              (staff: ItemsSitesStaff | undefined) =>
                staff && (
                  <li key={staff.id} className={style.listStaff__item}>
                    <Image src={avatar} alt="avatar" width={100} height={100} />
                    <ul>
                      <li className={style.listStaff__item__name}>
                        {staff.firstname} {staff.lastname}
                      </li>
                      <li>{staff.department}</li>
                      <li>{staff.email}</li>
                    </ul>
                  </li>
                )
            )}
          </ul>
        ) : (
          <p>Non ci sono dati da mostrare</p>
        )}
      </>
    </section>
  );
}

export default ListStaff;
