import { Box, Link, TextField } from "@mui/material";
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import Image from "next/image";
import logo from '../../public/images/logo.svg'


interface HeaderProps {
    setValue?: (value: string) => void;
}

export function Header({ setValue }: HeaderProps) {



    return (
        <>
            {!setValue ?
                <Box sx={{ width: '100vw', height: '10%', display: 'flex', justifyContent: 'start', alignItems: 'center', backgroundColor: '#e4e4e7' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', gap: 2, paddingX: 3, paddingY: 1 }}>
                        <Link href='/' color='#000'><ArrowBackIos /></Link>
                        <Image src={logo} alt="Logo" width={200} />
                    </Box>
                </Box>
                :
                <Box sx={{ width: '100vw', height: '10%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 5, backgroundColor: '#e4e4e7' }}>
                    <Box sx={{ paddingX: 3, paddingY: 1 }}>
                        <Image src={logo} alt="Logo" width={200} />
                    </Box>
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <TextField sx={{ width: '75%' }} color={'primary'} label="Find Car" id="name" onChange={(e) => setValue(e.target.value)} />
                    </Box>
                </Box>
            }
        </>
    )
}