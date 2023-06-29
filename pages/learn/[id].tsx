import { useRouter } from 'next/router'
import { CarDetail } from '../../src/components/CarDetail';
import { Box } from '@mui/material';
import { Header } from '../../src/components/Header';
import data from '../../public/api/cars.json'

export default function Learn() {

    const router = useRouter()
    const car = data.find((car) => car.id === router.query.id);


    if (!car) {
        return <div>Car not find</div>;
    }

    if (car) {
        return (
            <Box sx={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'center' }}>
                <Header />
                <Box sx={{ flex: 1 }}>
                    <CarDetail car={car} />
                </Box>
            </Box>
        )
    }
}