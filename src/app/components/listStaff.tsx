import { useEffect, useReducer } from "react";
import style from "./components.module.scss";
import Image from "next/image";
import avatar from "../../../public/image/avatar.webp";
import { ItemsSitesStaff } from "../generated2/models/ItemsSitesStaff";
import LoadImage from "./loadImage";
import Link from "next/link";
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
                    {staff.image && process.env.NEXT_PUBLIC_URL_ASSET && (
                      <LoadImage
                        src={
                          process.env.NEXT_PUBLIC_URL_ASSET + "/" + staff.image
                        }
                        alt={staff.lastname}
                        width={100}
                        height={100}
                      />
                    )}
                    <Link
                      href={{
                        pathname: `staff/${staff.slug}`,
                      }}
                    >
                      {" "}
                      <ul>
                        <li className={style.listStaff__item__name}>
                          {staff.firstname} {staff.lastname}
                        </li>
                        <li>{staff.department}</li>
                        <li>{staff.email}</li>
                      </ul>
                    </Link>
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
