import { ProSidebarProvider } from 'react-pro-sidebar'; import React from 'react'
import { useState } from "react";
import { ProSidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Sidebar, SubMenu } from 'react-pro-sidebar';

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { fontSize, padding } from '@mui/system';
import { hover } from '@testing-library/user-event/dist/hover';
const Item = ({ title, to, icon, selected, setSelected }) => {
   
    return (
        <MenuItem
            active={selected === title}
         
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Typography fontSize="13px">{title}</Typography>
            <Link to={to} />
        </MenuItem>
    );
};
const SideBar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Overview");
  return (
      <ProSidebarProvider  >
          <Sidebar width='20%' collapsed={isCollapsed} style={{ height: "100vh", background: "#ffff", color: "#647787" }}>
              <Menu iconShape="square">
                  {/* LOGO AND MENU ICON */}
                  <MenuItem
                      onClick={() => setIsCollapsed(!isCollapsed)}
                      icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                      style={{
                          margin: "10px 0 10px 0",
                        //   color: colors.grey[100],
                      }}
                  >
                      {!isCollapsed && (
                          <Box
                              display="flex"
                              justifyContent="space-between"
                              alignItems="center"
                              ml="15px"
                          >
                              <Button sx={{
                                  backgroundColor: "#27AE60", borderRadius: "30px", fontWeight: 700, color: "#fff", padding: "10px 40px 10px 40px", fontSize: "11px", ':hover': {
                                      bgcolor: 'green', // theme.palette.primary.main
                                      color: 'white',
                                  }}}
                                //   color={colors.grey[100]}
                              >
                                  GENERATE INVOICE
                              </Button>
                              <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                  <MenuOutlinedIcon />
                              </IconButton>
                          </Box>
                      )}
                  </MenuItem>

                  <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                      <Typography
                          variant="h6"
                          fontSize="15px"
                          sx={{ m: "15px 0 5px 20px" }}
                      >
                          Main
                      </Typography>
                      <Item
                          title="Overview"
                          fontSize="1px"
                          to="/"
                          icon={<HomeOutlinedIcon />}
                          selected={selected}
                          setSelected={setSelected}
                      />

                      <Typography
                          variant="h6"
                          fontSize="15px"
                          sx={{ m: "15px 0 5px 20px" }}
                      >
                          Payments
                      </Typography>
                      <Item
                          title="All Payments"
                          to="/all-payments"
                          icon={<PeopleOutlinedIcon />}
                          selected={selected}
                          setSelected={setSelected}
                      />
                      <Item
                          title="Reconcilled Payments"
                          to="/reconcilled-payments"
                          icon={<ContactsOutlinedIcon />}
                          selected={selected}
                          setSelected={setSelected}
                      />
                      <Item
                          title="Un - Reconcilled Payments"
                          to="/un-reconcilled-payments"
                          icon={<ReceiptOutlinedIcon />}
                          selected={selected}
                          setSelected={setSelected}
                      />
                      <Item
                          title="Manual Settlement"
                          to="/manual-settlement"
                          icon={<ReceiptOutlinedIcon />}
                          selected={selected}
                          setSelected={setSelected}
                      />

                      <Typography
                          variant="h6"
                          fontSize="15px"
                          sx={{ m: "15px 0 5px 20px" }}
                      >
                          Orders
                      </Typography>
                      <Item
                          title="All Orders"
                          to="/all-orders"
                          icon={<PersonOutlinedIcon />}
                          selected={selected}
                          setSelected={setSelected}
                      />
                      <Item
                          title="Pending Orders"
                          to="/pending-order"
                          icon={<CalendarTodayOutlinedIcon />}
                          selected={selected}
                          setSelected={setSelected}
                      />
                      <Item
                          title="Reconcilled Orders"
                          to="/reconcilled-order"
                          icon={<HelpOutlineOutlinedIcon />}
                          selected={selected}
                          setSelected={setSelected}
                      />

                      <Item
                          title="Merchant Profile"
                          to="/merchant-profile"
                          icon={<BarChartOutlinedIcon />}
                          selected={selected}
                          setSelected={setSelected}
                      />
                   
                  </Box>
              </Menu>
          </Sidebar>
      </ProSidebarProvider>
  )
}

export default SideBar
