import { baseUrl } from "./constants";
const GetPlanetsFromBack = async () => {
  const response = await fetch(`${baseUrl}/planets`);
  return await response.json();
};
export default GetPlanetsFromBack;
