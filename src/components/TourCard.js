import {
  Paper,
  Grid,
  Typography,
  Box,
  Rating,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { AccessTime } from "@mui/icons-material";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 11,
          },
        },
        {
          props: {
            variant: "body3",
          },
          style: {
            fontSize: 9,
          },
        },
      ],
    },
  },
});

const TourCard = ({
  id,
  name,
  duration,
  rating,
  numbersOfReviews,
  price,
  image,
}) => {
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3} className="paper">
          <img className="img" src={image} alt={name} />
          <Box paddingX={1}>
            <Typography variant="subtitle1" component="h2">
              {name}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <AccessTime sx={{ width: 12.5 }} />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                {duration} hours
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              marginTop={3}
            >
              <Rating
                name="read-only"
                value={rating}
                precision={0.5}
                readOnly
                size="small"
              />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                {rating}
              </Typography>
              <Typography variant="body3" component="p" marginLeft={2.5}>
                ({numbersOfReviews} reviews)
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" component="h3" marginTop={0}>
                From C ${price}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default TourCard;
