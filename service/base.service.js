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
