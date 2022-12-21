import React, { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import { format } from "date-fns";
import {
  Avatar,
  Box,
  Button,
  Card,
  Checkbox,
  IconButton,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { getInitials } from "../../utils/get-initials";
import { Delete } from "@mui/icons-material";

export const CustomerListResults = ({ customers, setCustomer, ...rest }) => {
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [buttonDelete, setButtonDelete] = useState(false);
  const [selcect, setSelect] = useState(0);
  const handleSelectAll = (event) => {
    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = customers.map((customer) => customer.id);
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (event, id: any) => {
    const selectedIndex = selectedCustomerIds.indexOf(id);
    let newSelectedCustomerIds = [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds, id);
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(1));
    } else if (selectedIndex === selectedCustomerIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, selectedIndex),
        selectedCustomerIds.slice(selectedIndex + 1)
      );
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const removeUser = (id) => {
    alert(id);
    const custom = customers.filter((index) => index.id != id);
    setCustomer(custom);
  };

  const stateButton=()=>{
    selectedCustomerIds.length  ? setButtonDelete(true) : setButtonDelete(false)
  }
  const nameColum = () => {
    return (
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            checked={selectedCustomerIds.length === customers.length}
            color="primary"
            indeterminate={
              selectedCustomerIds.length > 0 &&
              selectedCustomerIds.length < customers.length
            }
            onChange={(event) => {
              handleSelectAll(event)
              setButtonDelete(!buttonDelete)
            }}
          />
        </TableCell>
        <TableCell>Name</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>Location</TableCell>
        <TableCell>Phone</TableCell>
        <TableCell>Registration date</TableCell>
        <TableCell>Delete</TableCell>
      </TableRow>
    )
  }

  const nameColumDelete = () => {
    return (
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            checked={selectedCustomerIds.length === customers.length}
            color="primary"
            indeterminate={
              selectedCustomerIds.length > 0 &&
              selectedCustomerIds.length < customers.length
            }
            onChange={(event) => {
              handleSelectAll(event)
              setButtonDelete(!buttonDelete)
            }
            }
          />
        </TableCell>
        <TableCell>Select item: {selectedCustomerIds.length}</TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell>
          <Button size="small" variant="contained" startIcon={<Delete />} color="error">Delete</Button>
        </TableCell>
      </TableRow>
    )
  }

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              {buttonDelete ? nameColumDelete() : nameColum()}
            </TableHead>
            <TableBody>
              {customers.slice(0, limit).map((customer) => (
                <TableRow
                  hover
                  key={customer.id}
                  selected={selectedCustomerIds.indexOf(customer.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedCustomerIds.indexOf(customer.id) !== -1}
                      onChange={(event) => {
                        handleSelectOne(event, customer.id)
                        stateButton()
                      }}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <Avatar src={customer.avatarUrl} sx={{ mr: 2 }}>
                        {getInitials(customer.name)}
                      </Avatar>
                      <Typography color="textPrimary" variant="body1">
                        {customer.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell>
                    {`${customer.address.city}, ${customer.address.state}, ${customer.address.country}`}
                  </TableCell>
                  <TableCell>{customer.phone}</TableCell>
                  <TableCell>{format(customer.createdAt, "dd/MM/yyyy")}</TableCell>
                  <TableCell>
                    <Button variant="text" color="error" onClick={() => removeUser(customer.id)}>
                      <Delete />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={customers.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

CustomerListResults.propTypes = {
  customers: PropTypes.array.isRequired,
};
