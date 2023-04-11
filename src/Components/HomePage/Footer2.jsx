import { Link } from 'react-router-dom'
import './footer.css'

export let Footer2Link = ({children}) => {

    return (
        <Link><span className='footer2Link'>{children}</span></Link>
    )
}

export let Footer2Content = ({children}) => {

    return (
        <div className="footer2Content">{children}</div>
    )
}

let Footer2 = ({children}) => {

    return (
        <div className="footer2">
            {children}
        </div>
    )
}

export default Footer2