import axios from "axios";
import { GET_CONTACTS } from "./types";

export const getMangas = () => (dispatch) => {
  axios.get("/api/contacts").then((res) => {
    dispatch({
      type: GET_CONTACTS,
      payload: res.data,
    });
  });
};
export const addManga = (newManga) => (dispatch) => {
  axios.post("/api/contacts/add", newManga).then((res) => {
    dispatch(getMangas());
  });
};
export const deleteManga = (id) => (dispatch) => {
  axios.delete(`/api/contacts/${id}`).then((res) => {
    dispatch(getMangas());
  });
};
export const updateManga = (id, updatedManga) => (dispatch) => {
  axios.put(`/api/contacts/edit/${id}`, updatedManga).then((res) => {
    dispatch(getMangas());
  });
};