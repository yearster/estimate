import React from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'

const Header = () => (
    <div>
        <Link to='/'>Basic Info</Link>
        <Button variant="outlined"><Link style={{ textDecoration: 'none' }} to='/income'>Income</Link></Button>
        <Link to='/deduction'>Deduction</Link>
        <Link to='/creditsandpayments'>Credits and Payments</Link>
    </div>
)

export default Header;