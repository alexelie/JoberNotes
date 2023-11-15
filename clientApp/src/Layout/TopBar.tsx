import { Navbar, NavbarBrand } from "@nextui-org/react";
import MenuIcon from '@mui/icons-material/Menu';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';

interface TopBarProps {
    onClickMenuIcon: () => void
}

export default function TopBar(props: TopBarProps){
    return (
        <>     
            <Navbar maxWidth="full" style={{backgroundColor: "whitesmoke", display: "flex", justifyContent: "left"}} >
                <MenuIcon onClick={() => {props.onClickMenuIcon()}} style={{fontSize: "2em", cursor: "pointer", position: "relative", right: "6px"}}></MenuIcon>
                <NavbarBrand style={{marginLeft: "20px"}}>
                    <AccessAlarmsIcon style={{fontSize: "2.3em", position: "relative", bottom: "3px"}}></AccessAlarmsIcon>
                    <p style={{marginLeft: "5px", fontSize: "1.6em", fontWeight: "bold"}}>JoberNotes</p>
                </NavbarBrand>
            </Navbar>
        </>
    )
}