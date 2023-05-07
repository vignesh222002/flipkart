import "../profile.css"
import { didtriggerDeleteAddress, triggerDeleteAddress } from "../../../Redux"
import { IP, Port } from "../../../IP Address/IPAddress"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"

function ProfileDeletePopup() {
    let dispatch = useDispatch()
    const id = useSelector(state => state.deleteAddressPopup.id)

    function handleDelete() {
        const token = localStorage.getItem('token')

        let config = {
            method: 'delete',
            maxBodyLength: Infinity,
            url: `http://${IP}:${Port}/deleteAddress/${id}`,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }

        axios.request(config)
            .then((response) => {
                // console.log(response.data)
                if (response.data.status) {
                    dispatch(didtriggerDeleteAddress())
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    function handleCancel() {
        dispatch(didtriggerDeleteAddress())
    }

    return (
        <div className="profileOtpPopupContainer">
            <div className="profileOtpPopupContentContainer">
                <div className="profileDeletePopupContent">
                    <div className="profileDeletePopupHead">Are you sure you want to delete this address?</div>
                    <div className="profileAddressDeletePopup">
                        <div className="profileAddressDeletedeleteBtn" onClick={() => handleDelete()}>YES, DELETE</div>
                        <div className="profileAddressDeleteCancelBtn" onClick={() => handleCancel()}>CANCEL</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileDeletePopup