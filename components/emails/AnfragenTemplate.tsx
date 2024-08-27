import * as React from "react";

export interface EmailTemplateProps {
  name: string;
  email: string;
  phoneNumber?: string;
  message: string;
}

export const AnfragenTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  phoneNumber,
  message,
}) => (
  <div>
    <h1>Neue Buchungsanfrage von {name}</h1>
    <h2>{email}</h2>
    <h2>{phoneNumber}</h2>
    <p>{message}</p>
  </div>
);
