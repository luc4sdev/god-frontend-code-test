import { useRouter } from 'next/router'
import { CarDetail } from '../../src/components/CarDetail';
import { Box } from '@mui/material';
import { Header } from '../../src/components/Header';
import data from '../../public/api/cars.json'

export default function Shop() {

    const router = useRouter()
    const car = data.find((car) => car.id === router.query.id);


    return (
        <>
            {car && (
                <Box sx={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'center' }}>
                    <Header />
                    <Box sx={{ flex: 1 }}>
                        <CarDetail car={car} />
                    </Box>
                </Box>
            )}
        </>
    )

}