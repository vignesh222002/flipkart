import { Link } from 'react-router-dom'
import './footer.css'

export let Footer1Head = ({children}) => {

    return (
        <div className="footer1Head">{children}</div>
    )
}

export let Footer1Link = ({children}) => {

    return (
        <Link className='footer1Link'>{children}</Link>
    )
}

export let Footer1Mail = ({children}) => {

    return (
        <div className="footer1Mail">{children}</div>
    )
}

export let Footer1MailContent = ({children}) => {

    return (
        <div className="footer1MailContent">{children}</div>
    )
}

export let Footer1Address = ({children}) => {

    return (
        <div className="footer1Address">{children}</div>
    )
}

export let Footer1AddressContent = ({children}) => {

    return (
        <div className="footer1AddressContent">{children}</div>
    )
}

let Footer1Column = ({children}) => {

    return (
        <div className="footer1Column">{children}</div>
    )
}

export default Footer1Column