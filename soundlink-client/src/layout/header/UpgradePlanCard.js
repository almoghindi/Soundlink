// material-ui
import { styled } from "@mui/material/styles";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

// styles
const CardStyle = styled(Card)(({ theme }) => ({
  background: "black",
  marginTop: "16px",
  marginBottom: "16px",
  overflow: "hidden",
  position: "relative",
  "&:after": {
    content: '""',
    position: "absolute",
    width: "200px",
    height: "200px",
    border: "19px solid ",
    borderColor: "#8c46fe",
    borderRadius: "50%",
    top: "65px",
    right: "-150px",
  },
  "&:before": {
    content: '""',
    position: "absolute",
    width: "200px",
    height: "200px",
    border: "3px solid ",
    borderColor: "#8c46fe",
    borderRadius: "50%",
    top: "145px",
    right: "-70px",
  },
}));

// ==============================|| PROFILE MENU - UPGRADE PLAN CARD ||============================== //

const UpgradePlanCard = () => (
  <CardStyle>
    <CardContent sx={{ textAlign: "center" }}>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Typography
            variant="h4"
            color="white"
            sx={{
              fontFamily: "'Assistant', sans-serif", // Set font family
            }}
          >
            Upgrade your plan
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="subtitle2"
            color="white"
            sx={{
              opacity: 0.6,
              fontFamily: "'Assistant', sans-serif", // Set font family
            }}
          >
            70% discount for 1 years <br />
            subscriptions.
          </Typography>
        </Grid>
        <Grid item>
          <Stack direction="row">
            <Button
              variant="contained"
              color="warning"
              sx={{
                boxShadow: "none",
                fontFamily: "'Assistant', sans-serif",
                backgroundColor: "#8c46fe", // Lighter yellow color
                "&:hover": {
                  backgroundColor: "#201139", // Lighter yellow color on hover
                },
              }}
            >
              Go Premium
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </CardContent>
  </CardStyle>
);

export default UpgradePlanCard;
