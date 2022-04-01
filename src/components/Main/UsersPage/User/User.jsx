import axios from 'axios';
import React from 'react';
// import { v4 as id } from 'uuid';
import s from './User.module.css';

class User extends React.Component {
    constructor(props) {
        super(props);
        this.urlPhoto = 'https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg';
    }

    componentDidMount = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUser(res.data.items)

            })
    }

    onFolowUser = (id) => {
        this.props.unFollow(id)
    }

    folowUser = (id) => {
        this.props.follow(id)
    }
    setPage = (p) => {
        this.props.setCurrentPage(p);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUser(res.data.items)
                // this.props.setUsersCount(res.data.totalCount)
            })
    }

    render() {

        const pagesCount = Math.ceil(this.props.totalaUsersCount / this.props.pageSize);
        const pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <div className={s.wrap}>
                {
                    pages.map(p => {
                        return (
                            <span
                                key={p}
                                className={this.props.currentPage === p ? s.selectedPAge : null}
                                onClick={() => this.setPage(p)}>
                                {p}</span>
                        )
                    })
                }

                {
                    this.props.users.map(u => {
                        const photo = u.photos.large || u.photos.small ? u.photo.small : this.urlPhoto;
                        return (
                            <div key={u.id} className={s.container}>
                                <div className={s.photo_btn} >

                                    <img width='100px' src={photo} alt="" />
                                    {
                                        u.followed
                                            ? <button onClick={() => this.onFolowUser(u.id)}>unFollow</button>
                                            : <button onClick={() => this.folowUser(u.id)}>Follow</button>
                                    }
                                </div>
                                <div className={s.name_status}>
                                    <h4>{u.name}</h4>
                                    <p>{u.status ? u.status : 'Im not status'}</p>
                                </div>

                            </div>

                        )
                    })
                }

            </div>
        );
    }
}


export default User;