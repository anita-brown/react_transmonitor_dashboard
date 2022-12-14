import React from 'react'
import { Box } from '@mui/material'
import ChartOrders from '../../components/chart/ChartOrders'
import Cards from '../../components/transactions/Card'
import Table from '../../table/Table'

const Overview = () => {
  return (
    <Box>
      <Cards />
      <ChartOrders />
      <Table/>
    </Box>
  )
}

export default Overview
