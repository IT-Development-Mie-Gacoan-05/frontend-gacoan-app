import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button
} from "@material-ui/core";
import { Employee } from "../../../store/types/types";

interface TableProps {
  employee: Employee[];
}

const CustomTable: React.FC<TableProps> = ({ employee }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nama Pegawai</TableCell>
            <TableCell>Jabatan</TableCell>
            <TableCell>Divisi</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employee?.map((employes:any) => (
            <TableRow key={employes?.id}>
              <TableCell>{employes?.id}</TableCell>
              <TableCell>{employes?.nama_lengkap}</TableCell>
              <TableCell>{employes?.jabatan}</TableCell>
              <TableCell>{employes?.divisi}</TableCell>
              <TableCell>{employes?.email}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => console.log("Edit action", employes.id)}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  // onClick={() => onDelete(post?.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
