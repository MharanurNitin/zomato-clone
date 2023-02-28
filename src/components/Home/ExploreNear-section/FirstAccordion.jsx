import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {VscCircleFilled} from "react-icons/vsc";
export default function FirstAccordion({arr,title}) {
  
  return (
    <div>
      <Accordion style={{  width: "100%;",padding:"10px" }}>
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
            <ul style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {arr.map((el) => {
                return (
                  <p>
                    <VscCircleFilled />
                    {el}
                  </p>
                );
              })}
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
