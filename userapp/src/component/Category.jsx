// import * as React from 'react';
// import { styled, useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import CssBaseline from '@mui/material/CssBaseline';
// import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

// const drawerWidth = 240;

// const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginLeft: `-${drawerWidth}px`,
//     ...(open && {
//       transition: theme.transitions.create('margin', {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       marginLeft: 0,
//     }),
//   }),
// );

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   transition: theme.transitions.create(['margin', 'width'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: `${drawerWidth}px`,
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
//   justifyContent: 'flex-end',
// }));

// export default function PersistentDrawerLeft() {
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar position="fixed" open={open}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             sx={{ mr: 2, ...(open && { display: 'none' }) }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap component="div">
//             {/* Persistent drawer */}
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           '& .MuiDrawer-paper': {
//             width: drawerWidth,
//             boxSizing: 'border-box',
//           },
//         }}
//         variant="persistent"
//         anchor="left"
//         open={open}
//       >
//         <DrawerHeader>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//           </IconButton>
//         </DrawerHeader>
//         <Divider />
//         <List>
//           {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//             <ListItem key={text} disablePadding>
//               <ListItemButton>
//                 <ListItemIcon>
//                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                 </ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//         <Divider />
//         <List>
//           {['All mail', 'Trash', 'Spam'].map((text, index) => (
//             <ListItem key={text} disablePadding>
//               <ListItemButton>
//                 <ListItemIcon>
//                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                 </ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//       <Main open={open}>
//         <DrawerHeader />
//         <Typography paragraph>
//         </Typography>
//         <Typography paragraph>
//         </Typography>
//       </Main>
//     </Box>
//   );
// }


import React from 'react'

const Category = () => {
  return (
    <>
          {/* <div class="container-fluid mt-2">
        <div class="row row-cols-2 row-cols-sm-6 g-2 g-sm-3">
          <div class="col">
            <div class="p-3 ">
              <div class="card" style={{width: "16rem"}}>
                <img src="./images/laptop.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class=" text-center">
                    <h1>1</h1>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="p-3 ">
              <div class="card" style={{width: "16rem"}}>
                <img src="./images/laptop.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text text-center">
                    <h1>2</h1>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="p-3 ">
              <div class="card" style={{width: "16rem"}}>
                <img src="./images/laptop.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text text-center">
                    <h1>3</h1>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="p-3 ">
              <div class="card" style={{width: "16rem"}}>
                <img src="./images/laptop.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text text-center">
                    <h1>4</h1>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="p-3 ">
              <div class="card" style={{width: "16rem"}}>
                <img src="./images/laptop.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text text-center">
                    <h1>5</h1>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="p-3 ">
              <div class="card" style={{width: "16rem"}}>
                <img src="./images/laptop.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text text-center">
                    <h1>6</h1>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div> */}

    </>
  )
}

export default Category