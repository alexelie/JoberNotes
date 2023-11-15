import { usePathname } from "next/navigation";
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Link from "next/link";

interface SideMenuProps {
    isOpen: boolean
}

export default function SideMenu(props: SideMenuProps) {
    const width = props.isOpen ? "250px" : "75px";
    const sideMenuClass = props.isOpen ? "open" : "closed"
    const pathname = usePathname()

    function getMenuItemClassName(page: string){
        return `${pathname == page ? "activeMenu" : ""} block text-xl py-2 px-3 text-gray-900 rounded hover:bg-gray-100`
    }

    return (
        <>
            <div style={{width: width}} id="sideMenu" className={sideMenuClass}>
                <ul style={{paddingTop: "5px", paddingLeft: "5px", paddingRight: "5px"}} className="flex flex-col pl-1 pr-1 pt-2 mt-4 font-medium bg-gray-50 rtl:space-x-reverse">
                    <li style={{marginBottom: "5px"}}>
                        <Link href="/Notes" className={getMenuItemClassName("/Notes")} style={{display: "flex", alignItems: "center"}}>
                            <TextSnippetIcon style={{fontSize: "1.5em", marginRight: "5px"}} className="MenuItemIcon"></TextSnippetIcon>
                            <span>Notes</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/Calendar" className={getMenuItemClassName("/Calendar")} style={{display: "flex", alignItems: "center"}}>
                            <CalendarMonthIcon style={{fontSize: "1.5em", marginRight: "5px"}} className="MenuItemIcon"></CalendarMonthIcon>
                            <span>Calendar</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}