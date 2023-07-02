import React from "react";
import { Card, Button } from "react-bootstrap";
import "./resuable.css";

function ResuableCompponents({ head, collage, state }) {
  return (
    <div>
      <Card className="eductiondata">
        <div className="eduction">
          <h3>{head}</h3>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <span style={{ display: "flex" }}>
              <h4>{collage} </h4>({state})
            </span>
            <Button>Doc</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ResuableCompponents;
