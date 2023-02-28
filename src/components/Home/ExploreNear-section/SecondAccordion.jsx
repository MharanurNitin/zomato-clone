import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function SecondAccordion({arr,title}) {
  
  return (
    <div style={{ width: "100%" }}>
      <Accordion style={{ width: "100%" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <h3>{title}</h3>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul style={{ display: "flex", rowGap: "20px", flexWrap: "wrap" }}>
              {arr.map((el) => {
                return <p style={{ width: "18%" }}>{el}</p>;
              })}
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
