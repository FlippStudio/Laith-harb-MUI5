import TourCard from "../components/TourCard";
import { Container, Grid, Typography } from "@mui/material";
import cities from "../data.json";

const Home = () => {
  return (
    <div className="App">
      <Container
        fixed
        sx={{
          marginY: 4,
        }}
      >
        {cities.map((city, index) => {
          return (
            <>
              <Typography
                variant="h4"
                component="h2"
                marginTop={5}
                marginBottom={3}
              >
                Top {city.name}
              </Typography>
              <Grid container spacing={4} key={index}>
                {city.tours.map((tour) => {
                  return (
                    <TourCard
                      key={tour.id}
                      id={tour.id}
                      name={tour.name}
                      duration={tour.duration}
                      rating={tour.rating}
                      numbersOfReviews={tour.numberOfReviews}
                      price={tour.price}
                      image={tour.image}
                    />
                  );
                })}
              </Grid>
            </>
          );
        })}
      </Container>
    </div>
  );
};

export default Home;
