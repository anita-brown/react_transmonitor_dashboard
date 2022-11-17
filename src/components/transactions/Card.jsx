import React from 'react'
import chart from '../../assets/small chart.png'
import { Box, Card, Typography } from '@mui/material'

const data = [
    {
        transaction_volume: "Daily Transaction Volume",
        volume: "2,342"
    },
    {
        transaction_volume: "Daily Transaction Value",
        volume: "₦4,000,000"
    },
    {
        transaction_volume: "Total Transaction Volume",
        volume: "452,000"
    },
    {
        transaction_volume: "Total Transaction Value",
        volume: "₦4,000,000"
    },
   
]

const Cards = () => {
  return (
      <Box display="flex" flexWrap="wrap" gap="1rem" padding="2rem 2rem">
          {
              
          data.map((item)=> (
              <Card sx={{padding: "1rem 1rem"}}>
                  <Box display="flex" gap="1rem">
                      <Typography fontSize="13px" color="#787C90">
                          {item.transaction_volume}
                      </Typography>
                  <img src={chart} alt="" />
                  </Box>
                  {/* <Box> */}
                  <Typography color="#262626">{item.volume}</Typography>

                  {/* </Box> */}

          </Card>
          ))
          }
      
    </Box>
  )
}

export default Cards
