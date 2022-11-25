import axios from "axios";

export const saveJson = (data) => {
  return axios.post('https://imaibackend.donaldharringto.repl.co/save_json', { data })
    .then(data => data.data)
    .catch(error => { throw error.response });
};

export const getAiAnswer = (data) => {
  return axios.post('https://imaibackend.donaldharringto.repl.co/get_ai_answer', { data })
    .then(data => data.data)
    .catch(error => { throw error.response });
};