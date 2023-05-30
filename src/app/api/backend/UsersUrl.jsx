import axios from "axios";

/**
 * Instance axios to the BACKEND
 *
 * @author sultan
 */
const UsersUrl = axios.create({
  baseURL: "http://localhost:8000/api",
});
export default UsersUrl;
