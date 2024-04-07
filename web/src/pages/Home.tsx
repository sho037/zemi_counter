import { useState, useEffect } from "react";

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import { getSubjects, Subject } from "../api/subject";

export const Home = () => {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [selectedSubject, setSelectedSubject] = useState<number | null>(null);

  useEffect(() => {
    getSubjects().then((response) => {
      setSubjects(response);
    });
  }, []);

  return (
    <>
      <h1>Subjects</h1>
      <FormControl fullWidth>
        <InputLabel>学科・その他</InputLabel>
        <Select
          value={selectedSubject}
          label="学科・その他"
          onChange={(event) => setSelectedSubject(event.target.value as number)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {Array.isArray(subjects) &&
            subjects.map((subject) => (
              <MenuItem key={subject.id} value={subject.id}>
                {subject.name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </>
  );
};
