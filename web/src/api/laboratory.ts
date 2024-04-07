import { get } from "./get";

export const getLaboratories = async () => {
  return get("/laboratories");
};