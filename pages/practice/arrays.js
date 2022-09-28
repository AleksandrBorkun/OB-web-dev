import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

import styled from "@emotion/styled";

const ArrElem = styled(Typography)`
  ${({ index }) => `
display: inline-block;
position: relative;
&::after{
  position: absolute;
  content: '${index}';
  bottom: -1.2em;
  left: 0.2em;
  color: red;
}
`}
`;

const ArraysPage = () => {
  const [arr, setArray] = useState([]);
  const [val, setVal] = useState(null);
  const [out, setOut] = useState("");
  const handleButtonClicked = ({ target }) => {
    const key = target.id;
    const action = {
      push: () => {
        const temp = arr;
        setOut(temp.push(val));
        setArray(temp);
      },
      pop: () => {
        const temp = arr;
        setOut(temp.pop());
        setArray(temp);
      },
      unshift: () => {
        const temp = arr;
        setOut(temp.unshift(val));
        setArray(temp);
      },
      shift: () => {
        const temp = arr;
        setOut(temp.shift());
        setArray(temp);
      },
    };
    action[key]();
    setVal("");
  };
  return (
    <Box>
      <Typography variant="h2" component={"h1"} textAlign="center">
        Arrays Lesson #1
      </Typography>
      <Typography variant="h4" component={"h3"} m={4} textAlign="center">
        Current Array is: [
        {arr.map((it, key, arr) => (
          <ArrElem key={key} index={key} variant="h4" component={"h3"}>
            {it}
            {arr.length && key < arr.length - 1 && ", "}
          </ArrElem>
        ))}
        ]
      </Typography>
      <Box
        mt={2}
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "320px",
          maxWidth: "100%",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <TextField
            placeholder="Put your value here"
            onChange={({ target }) => setVal(target.value)}
            variant="outlined"
            value={val}
          />
          <Button
            onClick={handleButtonClicked}
            id={"push"}
            variant="contained"
            disabled={!val}
          >
            arr.push({JSON.stringify(val)})
          </Button>
        </Box>
        <Button
          onClick={handleButtonClicked}
          id={"shift"}
          variant="contained"
          sx={{ marginTop: 2 }}
          size={"large"}
        >
          arr.shift()
        </Button>
        <Button
          onClick={handleButtonClicked}
          id={"pop"}
          variant="contained"
          sx={{ marginTop: 2 }}
          size={"large"}
        >
          arr.pop()
        </Button>
        <Box sx={{ display: "flex" }} mt={2}>
          <TextField
            placeholder="Put your value here"
            onChange={({ target }) => setVal(target.value)}
            variant="outlined"
            value={val}
          />
          <Button
            onClick={handleButtonClicked}
            id={"unshift"}
            variant="contained"
            disabled={!val}
          >
            arr.unshift({JSON.stringify(val)})
          </Button>
        </Box>
      </Box>
      <Typography variant="h4" component={"h3"} m={4} textAlign="center">
        Command Output is: {JSON.stringify(out)}
      </Typography>
    </Box>
  );
};

export default ArraysPage;
