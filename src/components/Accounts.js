import React from 'react';
import HeaderAccounts from "./HeaderAccounts";
import "../style/Account.css";
import AccountSelector from "./AccountSelector";

function Accounts(props) {
    return (
        <div className="accounts">
            <HeaderAccounts/>
            <AccountSelector/>
        </div>
    );
}

export default Accounts;
