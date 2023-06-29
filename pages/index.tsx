import { useState } from "react";
import { Header } from "../src/components/Header";
import { Main } from "../src/components/Main";
import { Box } from "@mui/material";

export default function Index() {

    const [value, setValue] = useState('');


    return(
        <Box sx={{width:'100vw', height: '100vh', display: 'flex', flexDirection:'column', justifyContent: 'start', alignItems:'center'}}>
        <Header setValue={setValue} />
        <Box sx={{flex: 1}}>
        <Main value={value} />
        </Box>
        </Box>
    )
}