import { Container, Grid, Box, Typography } from "@mui/material";

import { headerStyles } from "@/styles/Header.styles";

export default function Header() {
    return (
        <Grid sx={headerStyles.topNav} container>
            <Grid item xs={12}>
                <Container maxWidth="xl">
                    <Grid container>
                        <Grid sx={headerStyles.text} item xs={4}>
                            <Typography>Support +234 070 3165 411</Typography>
                        </Grid>
                        <Grid sx={headerStyles.text} item xs={4}>
                            <Typography>
                                Free shipping for order over $200
                            </Typography>
                        </Grid>
                        <Grid sx={headerStyles.text} item xs={4}>
                            <Typography>Order tracking</Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
        </Grid>
    );
}
