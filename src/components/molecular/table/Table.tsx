import React, { ReactNode } from "react";
import styled from "styled-components";
import theme from "@/styles/theme";
import { TD, TH } from "../../atoms/tableCell/TableCell";
import TableRow from "../../atoms/tableRow/TableRow";
import Text from "../../atoms/text/Text";

const StyledTable = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  position: relative;

  & colgroup {
    @media screen and (max-width :${() => theme.breakPoint["mobile"]}) {
      display: none;
    }
  }
`;

interface TableProps {
  caption?: string;
  column?: string[];
  foot?: string;
  data: any[];
}

export default function Table({
  caption,
  column,
  foot,
  data,
  ...res
}: TableProps) {
  return (
    <StyledTable {...res}>
      <colgroup>
        <col style={{ width: "10%" }} />
        <col style={{ width: "50%" }} />
        <col style={{ width: "20%" }} />
        <col style={{ width: "30%" }} />
        <col style={{ width: "20%" }} />
      </colgroup>
      {column && (
        <thead>
          <TableRow>
            {column.map((item) => (
              <TH key={item}>{item}</TH>
            ))}
          </TableRow>
        </thead>
      )}
      {data && column && (
        <tbody>
          {data!.map((col, idx) => (
            <TableRow key={idx}>
              {column.map((cell, cellKey) => (
                <TD key={cellKey} $col={cell} $cellKey={cellKey}>
                  {col[cell]}
                </TD>
              ))}
            </TableRow>
          ))}
        </tbody>
      )}
      {foot && <tfoot>{foot}</tfoot>}
    </StyledTable>
  );
}
