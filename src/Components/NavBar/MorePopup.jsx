import { Link } from 'react-router-dom'
import './loginPopup.css'

let MorePopup = ({setMoreActive}) => {

    return (
        <div className='morePopup' onMouseOver={() => setMoreActive(true)} onMouseOut={() => setMoreActive(false)}>
            <div className="loginPopupArrow"></div>
            <div className='morePopupContent'>
                <ul className='morePopupList'>
                    <li className='morePopupListItem'>
                        <Link to="/" className='morePopupListLink'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 12 14"><g fill="none" fillRule="evenodd"><path d="M-4-3h20v20H-4z"></path><path fill="#2874F1" d="M6.17 13.61c-1.183 0-1.922-.723-1.922-1.88H8.09c0 1.157-.74 1.88-1.92 1.88zm4.222-5.028l1.465 1.104v1.07H0v-1.07l1.464-1.104v-2.31h.004c.035-2.54 1.33-4.248 3.447-4.652V.992C4.915.446 5.37 0 5.928 0c.558 0 1.014.446 1.014.992v.628c2.118.404 3.412 2.112 3.446 4.65h.004v2.312z"></path></g></svg>
                            <div className='morePopupListItemContent'>Notification Preferences</div>
                        </Link>
                    </li>
                    <li className='morePopupListItem'>
                        <Link to="/" className='morePopupListLink'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 14 17"><g fill="none" fillRule="evenodd"><path fill="#2874F0" fillRule="nonzero" d="M12.25.542H1.75c-.833 0-1.5.675-1.5 1.5v10.5c0 .825.667 1.5 1.5 1.5h3L7 16.292l2.25-2.25h3c.825 0 1.5-.675 1.5-1.5v-10.5c0-.825-.675-1.5-1.5-1.5zm-4.5 12h-1.5v-1.5h1.5v1.5zM9.303 6.73l-.676.69c-.54.547-.877.997-.877 2.122h-1.5v-.375c0-.825.338-1.575.877-2.123l.93-.945c.278-.27.443-.646.443-1.058 0-.825-.675-1.5-1.5-1.5s-1.5.675-1.5 1.5H4c0-1.658 1.342-3 3-3s3 1.342 3 3c0 .66-.27 1.26-.697 1.687z"></path></g></svg>
                            <div className='morePopupListItemContent'>24X7 Customer Care</div>
                        </Link>
                    </li>
                    <li className='morePopupListItem'>
                        <Link to="/" className='morePopupListLink'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 18 10"><g fill="none" fillRule="evenodd"><path fill="#2874F0" fillRule="nonzero" d="M12.333 0l1.91 1.908-4.068 4.067-3.333-3.333L.667 8.825 1.842 10l5-5 3.333 3.333 5.25-5.24L17.333 5V0"></path></g></svg>
                            <div className='morePopupListItemContent'>Advertise</div>
                        </Link>
                    </li>
                    <li className='morePopupListItem'>
                        <Link to="/" className='morePopupListLink'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 12 14"><g fill="none" fillRule="evenodd"><path d="M-4-3h20v20H-4z"></path><path fill="#2874F0" fillRule="nonzero" d="M12 4.94H8.57V0H3.43v4.94H0l6 5.766 6-5.765zM0 12.354V14h12v-1.647H0z"></path></g></svg>
                            <div className='morePopupListItemContent'>Download App</div>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MorePopup