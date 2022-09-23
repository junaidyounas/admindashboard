import React from 'react'
import { images } from '../../../assets/images'
import { CloseSharp, LogoutSharp, DashboardSharp, PersonOutlineSharp, ReceiptLongSharp, InsightsSharp, MailOutlineSharp, InventorySharp, ReportGmailerrorredSharp, SettingsSharp } from '@mui/icons-material';
type Props = {}
function AsideBar({}: Props) {
    return (
        <aside>
            <div className="top">
                <div className="logo">
                    <img src={images.logo} alt="" />
                    <h1>EGA<span className='danger'>TOR</span></h1>
                </div>
                <div className="close" id="close-btn">
                    <CloseSharp />
                </div>
            </div>
            <div className="sidebar">
                <a href="#">
                    <DashboardSharp className='icon' />
                    <h3>Dashboard</h3>
                </a>
                <a href="#">
                    <PersonOutlineSharp className='icon' />
                    <h3>Customers</h3>
                </a>
                <a href="#" className='active'>
                    <ReceiptLongSharp className='icon' />
                    <h3>Orders</h3>
                </a>
                <a href="#">
                    <InsightsSharp className='icon' />
                    <h3>Analytics</h3>
                </a>
                <a href="#">
                    <MailOutlineSharp className='icon' />
                    <h3>Messages</h3>
                    <span className="message-count">26</span>
                </a>
                <a href="#">
                    <InventorySharp className='icon' />
                    <h3>Products</h3>
                </a>
                <a href="#">
                    <ReportGmailerrorredSharp className='icon' />
                    <h3>Report</h3>
                </a>
                <a href="#">
                    <SettingsSharp className='icon' />
                    <h3>Settings</h3>
                </a>
                <a href="#">
                    <LogoutSharp />
                    <h3>Logout</h3>
                </a>
            </div>
        </aside>
    )
}

export default AsideBar