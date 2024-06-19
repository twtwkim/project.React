import {Link, useNavigate} from 'react-router-dom';
import '../css/Header.css';
import {useCallback} from 'react';
import Button from './Button';
import {connect} from 'react-redux';
import {logout} from '../modules/user';

const Header = ({isWhiteBackground, isScrolled, user, logout}) => {
    const navigate = useNavigate();
    // console.log(user);
    const onLogout = useCallback(() => {
        logout();
        alert("로그아웃 했습니다.")
        navigate('/main');
    }, [navigate, logout])

    const headerClassName = isWhiteBackground
        ? 'HeaderDiv whiteBackground'
        : 'HeaderDiv';
    const scrollBackgroundColor = isScrolled
        ? {
            backgroundColor: '#fafafa'
        }
        : {};
    return (
        <container>
            <div className={headerClassName} style={scrollBackgroundColor}>
                <div className='navigation'>
                    <Link to="/main" className='nav-link'>
                        <div style={{display:"flex", alignItems:"center"}}><img style={{width:"50px", marginRight:"10px"}} src='/src/assets/free-icon-football-ball-6223745.png'/> <h1>직관의 <span style={{color:"#845ef7"}}>맛</span></h1></div>
                    </Link>
                    <div/><div/><div/><div/><div/><div/><div/><div/><div/><div/><div/><div/><div/><div/><div/>
                    <div/><div/><div/><div/><div/><div/><div/>
                    <div>{
                            user
                                ? (
                                    <div
                                        style={{
                                            display: "flex",
                                            color: "blueviolet",
                                            fontSize:"1rem",
                                            textShadow: "-1px 0 #fff, 0 1px #fff, 1px 0 #fff, 0 -1px #fff"
                                        }}
                                        >
                                        <div>{user.username}님!{' '}환영합니다!</div>
                                    </div>
                                )
                                : ('')
                        }
                    </div>
                    <Link
                        to="/content"
                        className='nav-link'
                        style={{
                            fontSize: '1.25rem'
                        }}>여행예약</Link>
                    <Link
                        to="/review"
                        className='nav-link'
                        style={{
                            fontSize: '1.25rem'
                        }}>여행후기</Link>
                    <Link
                        to="/brand"
                        className='nav-link'
                        style={{
                            fontSize: '1.25rem'
                        }}>브랜드소개</Link>
                    <div>{
                            user
                                ? (
                                    <div
                                        style={{
                                            display: "flex"
                                        }}
                                        className='nav-link'>

                                        <div
                                            style={{
                                                cursor: "pointer"
                                            }}
                                            onClick={onLogout}>로그아웃</div>
                                    </div>
                                )
                                : (
                                    <div>
                                        <Link
                                            to="/login"
                                            className='nav-link'
                                            style={{
                                                fontSize: '0.75rem',
                                                marginRight: "30px"
                                            }}>로그인</Link>
                                        <Link
                                            to="/register"
                                            className='nav-link'
                                            style={{
                                                fontSize: '0.75rem'
                                            }}>회원가입</Link>
                                    </div>
                                )
                        }
                    </div>
                    <Link
                        to="/customer"
                        className='nav-link'
                        style={{
                            fontSize: '0.75rem'
                        }}>고객센터</Link>
                    {/* <Link to="/search" className='nav-link'>
                        <img src='../../src/assets/free-icon-search-5102702.png' style={{width:'30px', backgroundColor:'white'}}></img>
                    </Link> */
                    }
                </div>
                {/* <div className="separator"></div> */}
            </div>

        </container>
    );
};

export default connect((state) => ({user: state.user.user}), {logout})(Header)