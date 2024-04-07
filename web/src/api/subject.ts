import { get } from "./get";

export type Subject = {
  id: number;
  name: string;
};

export const getSubjects = async (): Promise<Subject[]> => {
  const subjects: Subject[] = await get("/subjects")
    .then((response) => {
      if (!Array.isArray(response.subjects)) {
        throw new Error("Response data is not an array");
      }
      return response.subjects;
    })
    .catch((error) => {
      throw new Error(error);
    });

  return subjects;
};
