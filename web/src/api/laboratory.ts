import { get } from "./get";

export type Laboratory = {
  id: number;
  name: string;
  registrants_str: string;
  subject_id: number;
};

export const getLaboratories = async ():Promise<Laboratory[]> => {
  const laboratories: Laboratory[] = await get("/laboratories")
    .then((response) => {
      if (!Array.isArray(response.laboratories)) {
        throw new Error("Response data is not an array");
      }
      return response.laboratories;
    })
    .catch((error) => {
      throw new Error(error);
    });

  return laboratories;
};