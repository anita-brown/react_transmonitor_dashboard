import { Box, Typography } from "@mui/material";
import vw from "../assets/vw.png";
;


const RenderImage = () => {
  return (
    <Box display="flex" alignItems="center" gap="2rem">
      <img src={vw} alt="" />
      <Typography fontSize="13px" color="#414042">
        Apple Mac Book 15” 250 SSD 12GB
      </Typography>
    </Box>
  );
};

export const columns = [
  {
    field: "item",
    headerName: "Item Type",
    flex: 2,
    renderCell: RenderImage,
  },
  {
    field: "price",
    headerName: "Price",
    type: "number",
    headerAlign: "left",
    align: "left",
  },
  {
    field: "transaction",
    headerName: "Transaction No",
    flex: 1,
  },

  {
    field: "time",
    headerName: "Time",
    flex: 1,
  },
  {
    field: "status",
    headerName: "",
    flex: 1,
   
  },
];
