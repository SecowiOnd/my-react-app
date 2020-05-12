import React from 'react'
import s from './Users.module.css';
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";


let Users = ({currentPage, totalUsersCount, pageSize , onPageChanged, ...props}) => {
    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                   totalItemsCount={totalUsersCount} pageSize={pageSize}/>
        <div>
        {
            props.users.map(u => <User user={u}
                                       followingInProgress={props.followingInProgress}
                                       unfollow={props.unfollow}
                                       follow={props.follow}
                                       key={u.id} />)
        }
        </div>
    </div>
}


export default Users;