import { userAgent } from "next/server";
import { useEffect, useReducer } from "react";
import style from "./components.module.scss";
import Image from "next/image";
import avatar from "../../../public/image/avatar.webp";

type Tstaff = {
  id: number;
  email: string;
  password: string;
  name: string;
  role: string;
  avatar: string;
};

type Taction = {
  type: string;
  payload: Tstaff[] | [];
};

type Tstate = {
  staff: Tstaff[] | [];
  error: string;
  loading: boolean;
};

const stateReducer: Tstate = {
  staff: [],
  error: "",
  loading: false,
};

function reducerStaff(state: Tstate, action: Taction) {
  switch (action.type) {
    case "FETCH_SUCCESS": {
      const staffMock = action.payload.slice(0, 10);
      console.log(staffMock);
      return {
        ...state,
        staff: staffMock,
        error: "",
        loading: false,
      };
    }
    case "FETCH_ERROR": {
      return {
        ...state,
        staff: [],
        error: "Something went wrong!",
        loading: false,
      };
    }
    case "FETCH_LOADING": {
      return { ...state, loading: true, error: "" };
    }
    default: {
      return state;
    }
  }
}

function ListStaff() {
  const [state, dispatch] = useReducer(reducerStaff, stateReducer);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/users")
      .then((res) => {
        dispatch({
          type: "FETCH_LOADING",
          payload: [],
        });

        return res.json();
      })
      .then((res) =>
        dispatch({
          type: "FETCH_SUCCESS",
          payload: res,
        })
      )
      .catch((err: string) => {
        console.log(err + "errore API");
        dispatch({
          type: "FETCH_ERROR",
          payload: [],
        });
      });
  }, []);

  return (
    <section className={style.listStaff}>
      {state.loading ? (
        "Loading"
      ) : state.error ? (
        "Errore caricamento dati"
      ) : (
        <ul>
          {state.staff.map((staff: Tstaff) => (
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
      )}
    </section>
  );
}

export default ListStaff;
