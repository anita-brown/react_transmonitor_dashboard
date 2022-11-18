import {  MenuItem} from "react-pro-sidebar";
import { Box,Typography } from "@mui/material";
import { Link } from "react-router-dom";


export const Item = ({ title, to, image, selected, setSelected }) => {
  return (
    <MenuItem active={selected === title} display="flex" alignItems="center" onClick={() => setSelected(title)}>
      <Box display="flex" alignItems="center" gap="1.2rem">
        <img src={image} alt="" />
        <Typography fontSize="13px">{title}</Typography>
      </Box>
      <Link to={to} />
    </MenuItem>
  );
};
