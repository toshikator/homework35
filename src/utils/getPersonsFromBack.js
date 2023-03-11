import { baseUrl } from "./constants";
const GetPersonsFromBack = async () => {
  const response = await fetch(`${baseUrl}/peoples`);
  return await response.json();
};
export default GetPersonsFromBack;
