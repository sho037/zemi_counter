import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Paper,
} from "@mui/material";

import { getSubjects, Subject } from "../api/subject";
import { getLaboratories, Laboratory } from "../api/laboratory";

export const Home = () => {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [selectedSubject, setSelectedSubject] = useState<number | null>(null);
  const [laboratories, setLaboratories] = useState<Laboratory[]>([]);

  useEffect(() => {
    getSubjects().then((response) => {
      setSubjects(response);
    });
    getLaboratories().then((response) => {
      setLaboratories(response);
    });
  }, []);

  return (
    <>
      <Paper
        sx={{
          display: "flex",
          paddingX: "20%",
          paddingY: "20px",
          margin: "50px 30px",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "10px",
          boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <h2>学科を選択</h2>
        <FormControl fullWidth>
          <InputLabel>学科・その他</InputLabel>
          <Select
            value={selectedSubject}
            label="学科・その他"
            onChange={(event) =>
              setSelectedSubject(event.target.value as number)
            }
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
      </Paper>
    
      {/* 選択された学科をもとに各研究室のLinkを表示 */}
      <Paper
        sx={{
          display: "flex",
          paddingX: "20%",
          paddingY: "20px",
          margin: "50px 30px",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "10px",
          boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <h2>研究室を選択</h2>
        {Array.isArray(laboratories) &&
          laboratories
            .filter(
              (laboratory) =>
                selectedSubject === null ||
                laboratory.subject_id === selectedSubject
            )
            .map((laboratory) => (
              <Link
                key={laboratory.id}
                to={`/laboratory/${laboratory.id}`}
                style={{ margin: "10px" }}
              >
                {laboratory.name}
              </Link>
            ))}
      </Paper>
    </>
  );
};
