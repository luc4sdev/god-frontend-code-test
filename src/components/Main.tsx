import { Box, Grid } from "@mui/material";
import Card from '@mui/material/Card';
import useMediaQuery from '@mui/material/useMediaQuery';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import ArrowCircleRight from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeft from '@mui/icons-material/ArrowCircleLeft';
import cars from '../../public/api/cars.json'
import Image from "next/image";
import Slider from "react-slick";
import { useState } from "react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface MainProps {
  value: string;
}

export function Main({ value }: MainProps) {

  const [page, setPage] = useState(0);

  const matches = useMediaQuery('(max-width:576px)');

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const startIndex = page * 4;
  const visibleCars = cars.slice(startIndex, startIndex + 4);


  const filteredCars = value.length > 0 ?
    cars.filter(car => car.bodyType.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(value.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""))) : [];
  const visibleCarsFiltered = filteredCars.slice(startIndex, startIndex + 4);


  return (
    <>
      {matches ? (
        <Box sx={{ height: '100%', paddingX: 3, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
          {value.length > 0 ? (
            <Box sx={{ width:'250px'}}>
              <Slider  {...settings}>
                {filteredCars.map((car, index) => (
                  <Card key={index} elevation={0} sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start' }}>
                    <CardContent sx={{ textAlign: 'start', padding: 0, marginBottom: 2 }}>
                      <Typography gutterBottom variant="h6" component="div" color="text.secondary" sx={{ fontWeight: 700 }} >
                        {car.bodyType}
                      </Typography>
                      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
                        <Typography variant="h6" color="text.primary" sx={{ fontWeight: 700 }}>
                          {car.modelName}
                        </Typography>
                        <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 500 }}>
                          {car.modelType}
                        </Typography>
                      </Box>
                    </CardContent>
                    <Image src={car.imageUrl} alt="Logo" width={350} height={250} />
                    <CardActions sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 2 }}>
                      <Button size="small" sx={{ fontWeight: 700 }} >Learn <KeyboardArrowRight /></Button>
                      <Button size="small" sx={{ fontWeight: 700 }} >Shop <KeyboardArrowRight /></Button>
                    </CardActions>
                  </Card>
                ))}
              </Slider>
            </Box>
            
          ) :
            (
              <Box sx={{ width:'250px'}}>
                <Slider  {...settings}>
                {cars.map((car, index) => (
                  <Card key={index} elevation={0} sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start' }}>
                    <CardContent sx={{ textAlign: 'start', padding: 0, marginBottom: 2 }}>
                      <Typography gutterBottom variant="h6" component="div" color="text.secondary" sx={{ fontWeight: 700 }} >
                        {car.bodyType}
                      </Typography>
                      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
                        <Typography variant="h6" color="text.primary" sx={{ fontWeight: 700 }}>
                          {car.modelName}
                        </Typography>
                        <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 500 }}>
                          {car.modelType}
                        </Typography>
                      </Box>
                    </CardContent>
                    <Image src={car.imageUrl} alt="Logo" width={350} height={250} />
                    <CardActions sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 2 }}>
                      <Button size="small" sx={{ fontWeight: 700 }} >Learn <KeyboardArrowRight /></Button>
                      <Button size="small" sx={{ fontWeight: 700 }} >Shop <KeyboardArrowRight /></Button>
                    </CardActions>
                  </Card>
                ))}
              </Slider>
              </Box>
            )}
        </Box >
      )
        :

        <Box sx={{ height: '100%', paddingX: 3, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
          {value.length > 0 ? (
            <>
              <Grid container spacing={2} columns={{ xs: 1, sm: 2, md: 2, lg: 4 }}>


                {visibleCarsFiltered.map((car, index) => (
                  <Grid item xs={1} sm={1} md={1} lg={visibleCarsFiltered.length < 4 ? 2 : 1} key={index}>
                    <Card elevation={0} sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start' }}>
                      <CardContent sx={{ textAlign: 'start', padding: 0, marginBottom: 2 }}>
                        <Typography gutterBottom variant="h6" component="div" color="text.secondary" sx={{ fontWeight: 700 }} >
                          {car.bodyType}
                        </Typography>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
                          <Typography variant="h6" color="text.primary" sx={{ fontWeight: 700 }}>
                            {car.modelName}
                          </Typography>
                          <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 500 }}>
                            {car.modelType}
                          </Typography>
                        </Box>
                      </CardContent>
                      <Image src={car.imageUrl} alt="Logo" width={350} height={250} />
                      <CardActions sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 2 }}>
                        <Button size="small" sx={{ fontWeight: 700 }} >Learn <KeyboardArrowRight /></Button>
                        <Button size="small" sx={{ fontWeight: 700 }} >Shop <KeyboardArrowRight /></Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              <Box sx={{ width: '100%', marginTop: 2, textAlign: 'end' }}>
                <Button disabled={page === 0} onClick={handlePrevPage}>
                  <ArrowCircleLeft sx={{ fontSize: 30 }} />
                </Button>
                <Button disabled={startIndex + 4 >= cars.length || startIndex + 4 >= filteredCars.length} onClick={handleNextPage}>
                  <ArrowCircleRight sx={{ fontSize: 30 }} />
                </Button>
              </Box>
            </>
          ) :
            (
              <>
                <Grid container spacing={2} columns={{ xs: 1, sm: 2, md: 2, lg: 4 }}>
                  {visibleCars.map((car, index) => (
                    <Grid item xs={1} sm={1} md={1} lg={1} key={index}>
                      <Card elevation={0} sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start' }}>
                        <CardContent sx={{ textAlign: 'start', padding: 0, marginBottom: 2 }}>
                          <Typography gutterBottom variant="h6" component="div" color="text.secondary" sx={{ fontWeight: 700 }} >
                            {car.bodyType}
                          </Typography>
                          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
                            <Typography variant="h6" color="text.primary" sx={{ fontWeight: 700 }}>
                              {car.modelName}
                            </Typography>
                            <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 500 }}>
                              {car.modelType}
                            </Typography>
                          </Box>
                        </CardContent>
                        <Image src={car.imageUrl} alt="Logo" width={350} height={250} />
                        <CardActions sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 2 }}>
                          <Button size="small" sx={{ fontWeight: 700 }} >Learn <KeyboardArrowRight /></Button>
                          <Button size="small" sx={{ fontWeight: 700 }} >Shop <KeyboardArrowRight /></Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  ))}
                </Grid>

                <Box sx={{ width: '100%', marginTop: 2, textAlign: 'end' }}>
                  <Button disabled={page === 0} onClick={handlePrevPage}>
                    <ArrowCircleLeft sx={{ fontSize: 30 }} />
                  </Button>
                  <Button disabled={startIndex + 4 >= cars.length} onClick={handleNextPage}>
                    <ArrowCircleRight sx={{ fontSize: 30 }} />
                  </Button>
                </Box>

              </>
            )}
        </Box >
      }

    </>

  )
}
