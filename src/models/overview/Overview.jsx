import React from 'react'
import ChartOrders from '../../components/chart/ChartOrders'
import Cards from '../../components/transactions/Card'

const Overview = () => {
  return (
    <div>
      <Cards />
      <ChartOrders/>
    </div>
  )
}

export default Overview
