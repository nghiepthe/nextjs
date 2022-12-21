import React, { useState } from 'react';
import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Checkbox,
    Divider,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TextField,
    Typography
} from '@mui/material';
import * as QRCode from "qrcode";

export const CreateUser = (users) => {
    const [userList, setList] = useState([]);
    const [limit, setLimit] = useState(10);

    const [values, setValues] = useState({
        id: "",
        name: "",
        role: "",

    });
    const [version, setVersion] = useState();

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };
    const handleChangeSubmit = (event) => {

    };


    return (
        <form >
            <Box sx={{ minWidth: 1050 }}>
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item md={12} xs={12} >
                            <TextField
                                fullWidth
                                label="ID"
                                name="id"
                                onChange={handleChange}
                                required
                                value={values.id}
                                variant="outlined"
                                size='small'

                            />
                        </Grid>
                        <Grid item md={12} xs={12}>
                            <TextField
                                fullWidth
                                label="Name"
                                name="name"
                                onChange={handleChange}
                                required
                                value={values.name}
                                variant="outlined"
                                size='small'
                            />
                        </Grid>
                        <Grid item md={12} xs={12}>
                            <TextField
                                fullWidth
                                label="Iposition"
                                name="role"
                                onChange={handleChange}
                                required
                                value={values.role}
                                variant="outlined"
                                size='small'
                            />
                        </Grid>
                    </Grid>
                    <Button variant='contained' color='primary' sx={{ marginTop: 3 }} size='small'
                        onClick={async () => {
                            const response = await fetch("http://192.168.1.101:3000/agent/add", {
                                method: "POST",
                                body: JSON.stringify(values),
                                headers: {
                                    "Content-Type": "application/json",
                                },

                            });
                            // const result = await response.text();
                            setList([...userList, values]);
                            alert("submit")
                        }}
                    >
                        Submit
                    </Button>
                </CardContent>
            </Box>
            <Box sx={{ minWidth: 1050 }}>
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label="Version"
                                name="version"
                                onChange={handleChange}
                                required
                                value={version}
                                variant="outlined"
                                size='small'
                            />
                        </Grid>
                        <Grid item md={2} xs={12}>
                            <Button variant='contained' color='primary' size='small' fullWidth onClick={async () => {
                                const response = await fetch(
                                    "http://192.168.1.101:3000/agent/register-schema",
                                    {
                                        method: "POST",
                                        body: JSON.stringify({ version: version }),
                                        headers: {
                                            "Content-Type": "application/json",
                                        },
                                    }
                                );
                                const res = await response.text();
                                alert("success!");
                            }}>
                                Register Schema
                            </Button>
                        </Grid>
                        <Grid item md={2} xs={12}>
                            <Button variant='contained' color='error' size='small' fullWidth
                                onClick={async () => await fetch("http://192.168.1.101:3000/agent/clear")}>
                                Clear All
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
                <Box sx={{ minWidth: 1050 }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Position</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {userList.map((element) => (
                                <TableRow
                                    hover
                                    key={element.id}
                                >
                                    <TableCell>{element.id}</TableCell>
                                    <TableCell>{element.name}</TableCell>
                                    <TableCell>{element.role}</TableCell>
                                    <TableCell>
                                        <Button variant="contained" color="primary"
                                            onClick={async () => {
                                                const response = await fetch(
                                                    `http://192.168.1.101:3000/agent/get-invitation-url?id=${element.id}&issue=true`
                                                );
                                                const inviUrl = await response.text();
                                                if (inviUrl) {
                                                    console.log(inviUrl);
                                                    QRCode.toCanvas(canvas, inviUrl, function (error) {
                                                        if (error) console.error(error);
                                                        console.log("success!");
                                                    });
                                                }
                                            }}

                                        >
                                            Issue Credential
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
                <canvas id="canvas"></canvas>
            </Box>
        </form>
    );
}

export async function getStaticProps() {
    const response = await fetch("http://192.168.1.101:3000/agent/get-all");
    const users = await response.json();
    console.log(users);
    return {
        props: { users },
    };
}

