import React from 'react';
import '../style/AccountSelector.css';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {Link} from "react-router-dom";

function AccountSelector(props) {
    return (
        <div className="account-selector">
           <div className="title">
               Who's watching?
           </div>
            <div className="accounts">
                <Link to="/browse">
                <div className="profile">
                    <img className="avatar" src="https://occ-0-247-116.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABWWT9Paohybk8Tl1JFcVemiIVLfyo2cR9iN34jG2yaKENy95LuUAw1LYoXCgclZhDOJMTsOElBV8KX4VFq2jFYdOCNFp.png?r=f08%22);" alt=""/>
                    <span className="name">OSCAR</span>
                </div>
                </Link>
                {/*<div className="profile">*/}
                {/*    <img className="avatar" src="https://occ-0-247-116.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABfeuTRimo9dUU0H8cuy7hn0hpGiXkmZ8M4XHe_WmnV0OcXvvZYimCWSdsyz8QfbVU_ymQMalE2Vj08up0vib_D9V_MK6.png?r=318);" alt=""/>*/}
                {/*    <span className="name">LAURA</span>*/}
                {/*</div>*/}
                <div className="profile">
                    <img className="avatar" src="https://occ-0-247-116.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABdkxZKpmjYsLFX44BfqQRsoF-2RTGBtZuVoIeCQN-bZ5UEbGt51JLX7dUi5y9-Nt-mDU6juhvecAdPSGUUXNYIJuTyaQ.png?r=fcd);" alt=""/>
                    <span className="name">Kids</span>
                </div>
                <div className="profile">
                    <img className="avatar" src="https://occ-0-247-116.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABSPtABLLdzH67IeybFgtMGX7QFWM3X9LGdDUGWSAheTJSJOzRWq6Nudy_nC3twf6DPYFOoFEQLP2-C7lDTo3GMNtGMK8.png?r=1fa);" alt=""/>
                    <span className="name">Watch Together</span>
                </div>
                <div className="profile">
                    <AddCircleIcon className="add-profile-icon"/>
                    <span className="name">Add Profile</span>
                </div>
            </div>
        </div>
    );
}

export default AccountSelector;
