import { Box, Card, IconButton, Typography } from "@mui/material";
import React from "react";
import bigGraph from "../../assets/big grapgh.png";
import bar from "../../assets/bar.png";
import { DatePickerRange } from "../datepicker/DatePickerCalendar";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const chart = [
  {
    header: "Orders",
    pendingOrders: 20,
    reconcilledOrders: 80,
    total: 100,
  },
  {
    header: "Payments",
    pendingOrders: 20,
    reconcilledOrders: 80,
    total: 100,
  },
];
const ChartOrders = () => {
  return (
    <Box display="flex" flexWrap="wrap" gap=".2rem" padding="0rem 2rem">
      <Card>
        <Box display="flex" justifyContent="space-between" marginBottom="1rem" padding="1rem 1.8rem 0">
          <Typography fontWeight="bold">Today: 5, Aug 2018</Typography>
          <Box display="flex" gap="1.4rem" alignItems="center">
            <Box>
              <DatePickerRange />
            </Box>

            <Box display="flex">
              <IconButton>
                <NavigateBeforeIcon sx={{ border: "1px solid #CED0DA", borderRadius: "3px", width: "2rem", background: "linear - gradient(0deg, #F2F4F7 0 %, #FFFFFF 100 %)" }} />
              </IconButton>
              <IconButton>
                <NavigateNextIcon sx={{ border: "1px solid #CED0DA", borderRadius: "3px", width: "2rem", background: "linear - gradient(0deg, #F2F4F7 0 %, #FFFFFF 100 %)" }} />
              </IconButton>
            </Box>
          </Box>
        </Box>
        <Box padding="0rem 1.8rem" display="flex" justifyContent="space-between" zIndex="1000">
          <Typography fontWeight="bold">Jan</Typography>
          <Typography fontWeight="bold">Feb</Typography>
          <Typography fontWeight="bold">Mar</Typography>
          <Typography fontWeight="bold">Apr</Typography>
          <Typography fontWeight="bold">May</Typography>
          <Typography fontWeight="bold">Jun</Typography>
        </Box>
        <img zIndex="10" sx={{ marginbottom: "40rem" }} src={bigGraph} alt="" />
      </Card>
      <Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: ".2rem" }}>
          {chart.map((item) => (
            <Card sx={{ padding: "1.5rem 2.8rem 1.9rem 1.8rem", display: "flex", flexDirection: "column", gap: "0rem" }}>
              <Typography sx={{ fontWeight: "bold" }} marginBottom=".6rem">
                {item.header}
              </Typography>
              <img src={bar} alt="" />
              <Box marginTop=".5rem" display="flex" flexDirection="column" gap=".4rem">
                <Typography fontSize="12px" color="#262626">
                  Pending Orders: {item.pendingOrders}
                </Typography>
                <Typography fontSize="12px" color="#262626">
                  Reconcilled Orders: {item.reconcilledOrders}
                </Typography>
                <Typography fontSize="12px" color="#262626">
                  Total Orders:{item.total}
                </Typography>
              </Box>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ChartOrders;
