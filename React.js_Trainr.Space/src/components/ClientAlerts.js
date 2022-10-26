import React from "react";
import { Card } from "reactstrap";
import "./styles/ClientAlerts.css";
export default function ClientAlerts({ alerts }) {
  return (
    <div>
      {alerts ? (
        <Card className="alert-custom1 text-center bg-transparent border-0">
          {alerts}
        </Card>
      ) : null}
    </div>
  );
}
