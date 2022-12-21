import Head from 'next/head';
import { Box, Container, Grid, Typography } from '@mui/material';
import { DashboardLayout } from "../components/dashboard-layout";
import { CreateUser } from '../components/creactqr/createqr-user';

const Page = () => (
  <>
    <Head>
      <title>
        Account | Material Kit
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{ mb: 3 }}
          variant="h4"
        >
          Create QR
        </Typography>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <CreateUser />
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            {/* <AccountProfileDetails /> */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;

