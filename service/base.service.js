import axios from "axios";

const base_url = "https://kennedy-dev1.gojitech.systems";

//auth

//patient
export function fetchPatients(keyword) {
  const url = base_url + "/api/v1/oscar/patients/?keyword=" + keyword;
  return axios.get(url);
}

//drugs
export function getDrugsCandidates(keyword) {
  const url = base_url + "/api/v1/oscar/drugs/search/?keyword=" + keyword;
  return axios.get(url);
}

//prescription
export function getEntities(string) {
  const url = base_url + "/api/v1/test/inputtext";
  return axios.post(url, {
    phrase: string,
  });
}

//notes

export function getNotes(id) {
  const url = base_url + "/api/v1/oscar/notes/?demographicNo=" + id;
  return axios.get(url);
}

export function createNotes(param) {
  const url = base_url + "/api/v1/oscar/notes";
  return axios.post(url, param);
}
