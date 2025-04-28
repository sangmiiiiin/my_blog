import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import { useNavigate } from 'react-router-dom';

export default function TemporaryDrawer({ isAuthenticated }) {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleNavigate = (path) => {
    navigate(path);
    setOpen(false);
  }
  const afterLoginItems = '새 글 작성';
  const userHandler = ['로그인', '회원가입', '방명록'];
  const itemCategory = ['전체보기', '상의', '하의', '잡화']

  const AfterLoginRenderButtons = (text) => {
    return (
      <ListItem key={text} disablePadding>
        <ListItemButton
          onClick={() => {
            text === "새 글 작성" && handleNavigate("/create");
          }}
        >
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </ListItem>
    )
  }

  const renderButtons = (items) => (
    items.map((item, index) => (
      <ListItem key={item} disablePadding>
        <ListItemButton
          onClick={() => {
            item === "회원가입" && handleNavigate("/register");
            item === "로그인" && handleNavigate("/login");
            item === "방명록" && handleNavigate("/main");
            item === "상의" && handleNavigate("/shirt");
            item === "하의" && handleNavigate("/pants");
            item === "잡화" && handleNavigate("/etc");
          }}
        >
          <ListItemIcon>
            {index % 2 === 0 ? <MailIcon /> : <InboxIcon />}
          </ListItemIcon>
          <ListItemText primary={item} />
        </ListItemButton>
      </ListItem>
    ))
  )


  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {isAuthenticated ? AfterLoginRenderButtons(afterLoginItems) : renderButtons(userHandler)}
      </List>
      <Divider />
      <List>
        {renderButtons(itemCategory)}
      </List>
      <Divider />
      <List>
        {['비지니스 문의', '건의사항', '메뉴'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <DynamicFeedIcon onClick={toggleDrawer(true)} sx={{ display: { xs: 'flex', md: 'flex' }, mr: 3, cursor: 'pointer', color: "black" }} />
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
