import Head from "next/head";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { AccountProfile } from "../components/account/account-profile";
import { AccountProfileDetails } from "../components/account/account-profile-details";
import { DashboardLayout } from "../components/dashboard-layout";
import { Delete, Download, Upload } from "@mui/icons-material";

const Page = () => (
  <>
    <Head>
      <title>Role | Material Kit</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            m: -1,
          }}
        >
          <Typography sx={{ mb: 3 }} variant="h4">
            Role
          </Typography>
          <Box sx={{ m: 1 }}>
            <Button startIcon={<Upload fontSize="small" />} sx={{ mr: 1 }}>
              Import
            </Button>
            <Button startIcon={<Download fontSize="small" />} sx={{ mr: 1 }}>
              Export
            </Button>
            <Button color="primary" variant="contained" sx={{ marginRight: 1 }}>
              Add Customers
            </Button>
            <Button variant="contained" startIcon={<Delete />} color="error">
              Delete
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
