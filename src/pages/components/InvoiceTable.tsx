import React from "react";
import { Table } from "@mantine/core";
import { Invoice } from "../../server/Invoice";
import AlertIcon from "./AlertIcon";

type TableProps = {
  invoices: Invoice[];
};

const InvoiceTable = ({ invoices }: TableProps) => {
  const rows = invoices.map((invoice) => {
    return (
      <tr key={invoice.invoiceName}>
        <td>
          <AlertIcon></AlertIcon>
        </td>
        <td>{invoice.scanDate.toLocaleDateString()}</td>
        <td>{invoice.invoiceName}</td>
        <td>{invoice.fieldsWrong}</td>
      </tr>
    );
  });

  return (
    <Table>
      <thead>
        <tr>
          <th></th>
          <th>Scan Date</th>
          <th>Name</th>
          <th>Errors</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};

export default InvoiceTable;
