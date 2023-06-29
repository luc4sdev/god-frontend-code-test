import { Box, TextField } from "@mui/material";
import Image from "next/image";
import logo from '../../public/images/logo.svg'


interface HeaderProps {
    setValue: (value: string) => void;
}
export function Header({ setValue } : HeaderProps) {



    return (
        <Box sx={{ width: '100vw', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 5, backgroundColor: '#e4e4e7' }}>
            <Box sx={{ paddingX:3, paddingY:1 }}>
            <Image src={logo} alt="Logo" width={200}/>
            </Box>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <TextField sx={{ width: '75%'}} color={'primary'} label="Find Car" id="name" onChange={(e) => setValue(e.target.value)} />
            </Box>
        </Box>
    )
}