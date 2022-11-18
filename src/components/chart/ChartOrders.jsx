import { Box, Card, IconButton, Typography } from '@mui/material'
import React from 'react'
import bigGraph from '../../assets/big grapgh.png'
import bar from "../../assets/bar.png"


const chart = [
    {
        header: "Orders",
        pendingOrders: 20,
        reconcilledOrders: 80,
        total: 100
    },
    {
        header: "Payments",
        pendingOrders: 20,
        reconcilledOrders: 80,
        total: 100
    }
]
const ChartOrders = () => {
    return (
        <Box display="flex" gap="1rem" padding="0rem 2rem">


            <Card>
                <Box padding="1rem 1.8rem">
                    <Typography fontSize="bold">
                        Today: 5, Aug 2018
                    </Typography>
                    <Box>
                        <IconButton></IconButton>
                        <IconButton></IconButton>
                    </Box>
                </Box>
                <Box padding="0rem 1.8rem" display="flex" justifyContent="space-between" fontSize="700" zIndex="1000">
                    <Typography>Jan</Typography>
                    <Typography>Feb</Typography>
                    <Typography>Mar</Typography>
                    <Typography>Apr</Typography>
                    <Typography>May</Typography>
                    <Typography>Jun</Typography>
                </Box>
                <img zIndex="10" sx={{marginbottom:"40rem"}} src={bigGraph} alt="" />
            </Card>
            <Box  >
                <Box sx={{ display: "flex", flexDirection: "column" ,gap: "1rem" }} >
                    {chart.map((item) => (
                        <Card sx={{ padding:"1.5rem 1.8rem"}}>
                    <Typography>{item.header}</Typography>
                    <img src={bar} alt="" />
                            <Typography>Pending Orders: { item.pendingOrders}</Typography>
                            <Typography>Reconcilled Orders: { item.reconcilledOrders}</Typography>
                            <Typography>Total Orders:{ item.total}</Typography>
                        </Card>
                    ))}
                    

             </Box>

            </Box>
        </Box>
    )
}

export default ChartOrders
