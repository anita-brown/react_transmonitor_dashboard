import React from "react";
import { useState } from "react";
import { Sidebar, Menu, MenuItem, ProSidebarProvider } from "react-pro-sidebar";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { Item } from "../../utils/Utils";
import overview from "../../assets/overview.png";
import payment from "../../assets/payment.png";
import reconcilied from "../../assets/reconcilled.png";
import unreconcilied from "../../assets/un_reconcilled.png";
import dot from "../../assets/dot.png";
import allorder from "../../assets/allorder.png";
import order from "../../assets/order.png";
import pending from "../../assets/pending.png";
import profile from "../../assets/profile.png";

const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Overview");
  return (
    <ProSidebarProvider>
      <Sidebar width="20%" collapsed={isCollapsed} style={{ minHeight: "100vh", background: "#ffff", color: "#647787" }}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <ChevronRightIcon /> : undefined}
            style={{
              margin: "10px 0 10px 0",
            }}
          >
            {!isCollapsed && (
              <Box display="flex" justifyContent="space-between" alignItems="center" ml="15px">
                <Button
                  sx={{
                    backgroundColor: "#27AE60",
                    borderRadius: "30px",
                    fontWeight: 700,
                    color: "#fff",
                    padding: "10px 40px 10px 40px",
                    fontSize: "11px",
                    ":hover": {
                      bgcolor: "green",
                      color: "white",
                    },
                  }}
                >
                  GENERATE INVOICE
                </Button>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <ChevronRightIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Typography variant="h6" fontSize="15px" sx={{ m: "15px 0 5px 20px" }}>
              Main
            </Typography>
            <Item title="Overview" fontSize="1px" to="/" image={overview} selected={selected} setSelected={setSelected} />

            <Typography variant="h6" fontSize="15px" sx={{ m: "15px 0 5px 20px" }}>
              Payments
            </Typography>
            <Item title="All Payments" to="/all-payments" image={payment} selected={selected} setSelected={setSelected} />
            <Item title="Reconcilled Payments" to="/reconcilled-payments" image={reconcilied} selected={selected} setSelected={setSelected} />
            <Item title="Un - Reconcilled Payments" to="/un-reconcilled-payments" image={unreconcilied} selected={selected} setSelected={setSelected} />
            <Item title="Manual Settlement" to="/manual-settlement" image={dot} selected={selected} setSelected={setSelected} />

            <Typography variant="h6" fontSize="15px" sx={{ m: "15px 0 5px 20px" }}>
              Orders
            </Typography>
            <Item title="All Orders" to="/all-orders" image={allorder} selected={selected} setSelected={setSelected} />
            <Item title="Pending Orders" to="/pending-order" image={pending} selected={selected} setSelected={setSelected} />
            <Item title="Reconcilled Orders" to="/reconcilled-order" image={order} selected={selected} setSelected={setSelected} />
            <Box marginTop="1.5rem">
              <Item title="Merchant Profile" to="/merchant-profile" image={profile} selected={selected} setSelected={setSelected} />
            </Box>
          </Box>
        </Menu>
      </Sidebar>
    </ProSidebarProvider>
  );
};

export default SideBar;
