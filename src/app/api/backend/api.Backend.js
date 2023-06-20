import axios from "axios";

/**
 * Instance axios to the BACKEND
 *
 * @author Peter et Sultan
 */
const apiBackEnd = axios.create({
  baseURL: "http://localhost:8000/api/",
});

const backEnd = axios.create({
  baseURL: "http://localhost:8000/",
});

export { apiBackEnd, backEnd };