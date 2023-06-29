import { Box } from "@mui/material";
import Card from '@mui/material/Card';
import useMediaQuery from '@mui/material/useMediaQuery';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image from "next/image";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Car {
    id: string;
    modelName: string;
    bodyType: string;
    modelType: string;
    imageUrl: string;
}

interface CarDetailProps {
    car: Car;
}

export function CarDetail({ car } : CarDetailProps) {

    const matches = useMediaQuery('(max-width:576px)');

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            {matches ? (
                <Box sx={{ height: '100%', paddingX: 3, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ width: '250px' }}>
                        <Slider  {...settings}>
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
                            </Card>
                        </Slider>
                    </Box>
                </Box >
            )
                :

                <Box sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
                    <>
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
                        </Card>
                    </>
                </Box >
            }
        </>
    )
}