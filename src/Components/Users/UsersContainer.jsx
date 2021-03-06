import React from 'react';
import * as axios from 'axios';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers } from '../../Redux/users-reducer';
import { connect } from 'react-redux';
import {
    getUsersForContainer,
    getPageSize,
    getTotalUsersCount,
    getCurrentPage,
    getIsFetching,
    getFollowingInProgress,
    getUsersSuperSelector
} from '../../Redux/users-selectors';

class UsersContainer extends React.Component {
    componentDidMount() {
        const {currentPage,pageSize} = this.props;
        this.props.requestUsers(currentPage, pageSize);
    }


    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.requestUsers(pageNumber, pageSize);

        this.props.setCurrentPage(pageNumber);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                onPageChanged={this.onPageChanged}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}



let mapStateToProps = (state) => {
    return {
        users: getUsersSuperSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
};


export default connect(mapStateToProps,
    { follow, unfollow, setCurrentPage,
        toggleFollowingProgress, requestUsers})
    (UsersContainer)