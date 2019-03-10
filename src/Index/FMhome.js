import React, {Component} from "react";
import CSSModules from 'react-css-modules';
import styles from "./index.less";
//import Services from "../../services/index";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux"
import store from "../Store"
import {DRAWER_CHANGE, SNACKBAR_CHANGE, SONG_CHANGE} from "./actionTypes";
import Button from '@material-ui/core/Button';
import Background from './imgs/bg.jpg'

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.props.songs
        };
    }

    async fetchCustomiseSongs() {
        const {userId} = this.props.users;
        return userId
    }

    async fetchQualitySongs() {
       // const {userId} = this.props.users;
        return "userId"
    }

    async fetchCollectSongs() {
        //const {userId} = this.props.users;
        return "userId"
    }

    async fetchSongList() {
        console.log(this.props);
        const {songList} = this.props.songs;
        const fmType = this.props.match && this.props.match.params.fmType;
        let qualitySongList = [];
        let customiseSongList = [];
        let collectSongList = [];
        let activeChannelTotal = 0;
        let channelName = '';

        // 若播放列表不存在，则请求所有列表
        if(!songList.length){
            qualitySongList = await this.fetchQualitySongs();
            customiseSongList = await this.fetchCustomiseSongs();
            collectSongList = await this.fetchCollectSongs();
            switch (fmType) {
                case 'quality':
                    activeChannelTotal = qualitySongList.length;
                    channelName = '精选FMHz';
                    store.dispatch({
                        type: SONG_CHANGE,
                        songs: {
                            songList: qualitySongList
                        }
                    });
                    break;
                case 'customise':
                    activeChannelTotal = customiseSongList.length;
                    channelName = '私人FMHz';
                    store.dispatch({
                        type: SONG_CHANGE,
                        songs: {
                            songList: customiseSongList
                        }
                    });
                    break;
                case 'collect':
                    activeChannelTotal = collectSongList.length;
                    channelName = '红心FMHz';
                    store.dispatch({
                        type: SONG_CHANGE,
                        songs: {
                            songList: collectSongList
                        }
                    });
                    break;
                default:
                    activeChannelTotal = qualitySongList.length;
                    store.dispatch({
                        type: SONG_CHANGE,
                        songs: {
                            songList: qualitySongList
                        }
                    });
                    break;
            }
            store.dispatch({
                type: SONG_CHANGE,
                songs: {
                    qualitySongList,
                    customiseSongList,
                    collectSongList
                }
            });
        }else{
            // 若存在播放列表，不处于红心fm，不修改歌曲播放列表
            collectSongList = await this.fetchCollectSongs();
            switch (fmType) {
                case 'quality':
                    qualitySongList = await this.fetchQualitySongs();
                    activeChannelTotal = qualitySongList.length;
                    channelName = '精选FMHz';
                    store.dispatch({
                        type: SONG_CHANGE,
                        songs: {
                            qualitySongList,
                            collectSongList
                        }
                    });
                    break;
                case 'customise':
                    customiseSongList = await this.fetchCustomiseSongs();
                    activeChannelTotal = customiseSongList.length;
                    channelName = '私人FMHz';
                    store.dispatch({
                        type: SONG_CHANGE,
                        songs: {
                            customiseSongList,
                            collectSongList
                        }
                    });
                    break;
                case 'collect':
                    activeChannelTotal = collectSongList.length;
                    channelName = '红心FMHz';
                    store.dispatch({
                        type: SONG_CHANGE,
                        songs: {
                            songList: collectSongList,
                            collectSongList
                        }
                    });
                    break;
                default:
                    qualitySongList = await this.fetchQualitySongs();
                    activeChannelTotal = qualitySongList.length;
                    channelName = '精选FMHz';
                    store.dispatch({
                        type: SONG_CHANGE,
                        songs: {
                            qualitySongList,
                            collectSongList
                        }
                    });
                    break;
            }
        }
        setTimeout(() => {
            store.dispatch({
                type: SNACKBAR_CHANGE,
                snackbar: {
                    open: true,
                    msg: `当前${channelName}共${activeChannelTotal}首歌`
                }
            })
        }, 0)
    }

    componentDidMount() {
        this.fetchSongList();
    }

    getInitialState() {
        return {};
    }

    toggleMenu() {
        this.setState({
            menuState: Object.assign({}, this.state.menuState, {
                isShow: !this.state.menuState.isShow
            })
        });
    }

    onSelect(value) {
        console.log(value);
    }

    openMenu() {
        store.dispatch({
            type: DRAWER_CHANGE,
            drawer: {
                left: true
            }
        })
    }

    togglePlay() {
        const {isPlay} = this.props.songs;
        if (isPlay) {
            store.dispatch({
                type: SONG_CHANGE,
                songs: {
                    isPlay: false
                }
            })
        } else {
            store.dispatch({
                type: SONG_CHANGE,
                songs: {
                    isPlay: true
                }
            })
        }

    }

    showPauseBtn() {
        if (this.state.isPlay) {
            this.setState({
                isPauseBtn: true
            });
            setTimeout(() => {
                this.setState({
                    isPauseBtn: false
                });
            }, 2000)
        }
    }

    onPlayNext() {
        let {activeIndex, songList} = this.props.songs;
        activeIndex = activeIndex === songList.length - 1 ? 0 : activeIndex + 1;
        console.log(activeIndex)
        store.dispatch({
            type: SONG_CHANGE,
            songs: {
                activeIndex
            }
        })
    }

    onDislikeSong() {
        const {userId} = this.props.users;
        const {activeIndex, songList} = this.props.songs;
        const {name} = songList && songList[activeIndex];
        const songId = songList && songList[activeIndex].id
        
    }

    onToggleCollect() {
        const {userId} = this.props.users;
        let {activeIndex, songList, collectSongList} = this.props.songs;
        const songId = songList[activeIndex].id;
       
    }

    render() {
        console.log('render')
        let songList = this.props.songs.songList;
        let activeIndex = this.props.songs.activeIndex;
        let name = songList && songList[activeIndex] && songList[activeIndex].name;
        let author = songList && songList[activeIndex] && songList[activeIndex].author;
        let music = songList && songList[activeIndex] && songList[activeIndex].music;
        let pic = songList && songList[activeIndex] && songList[activeIndex].pic;
        let isCollect = songList && songList[activeIndex] && songList[activeIndex].isCollect;
        const {isPlay} = this.props.songs
		const imageUrl = require(`./imgs/bg.jpg`)
        return (
            <div >
                <section >
                    <i className="iconfont icon-menu"  onClick={this.openMenu.bind(this)}></i>
                </section>
                <div  style={{backgroundImage: "url(./imgs/bg.jpg)",height:300,width:500,backgroundSize: 'cover'}} >photo</div>
				
                <div >
				<Button onClick={this.openMenu}>Open Menu</Button>
				</div>
                <section >
                    <section >
                        <span >
                            <span 
                                  style={{backgroundImage: 'url(' + pic + ')'}}>
                            </span>
                            <span >
                                <i className={isPlay ? 'iconfont icon-pause' : 'iconfont icon-play'}
                                   
                                   onClick={this.togglePlay.bind(this)}>
                                </i>
                            </span>
                        </span>
                        <div>
                            <h3 >name</h3>
                            <p >author</p>
                        </div>
                        <div >
                            <div >
                                <div  onClick={this.onDislikeSong.bind(this)}>
                                    <i className="iconfont icon-trash" ></i>
                                </div>
                                <div  onClick={this.onToggleCollect.bind(this)}>
                                    <i className="iconfont icon-love"
                                       ></i>
                                </div>
                                <div  onClick={this.onPlayNext.bind(this)}>
                                    <i className="iconfont icon-next" ></i>
                                </div>
                            </div>
                        </div>
                    </section>

                </section>
            </div>
        );
    }
}


const mapStateToProps = (store) => {
    return {
        snackbar: store.snackbar,
        songs: store.songs,
        users: store.users
    }
};

Index = CSSModules(Index, {
    ...styles
}, {
    allowMultiple: true
});

Index = withRouter(Index)

export default connect(mapStateToProps)(Index)

