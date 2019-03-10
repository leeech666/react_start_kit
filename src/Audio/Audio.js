import React from "react";
import {connect} from "react-redux";
import store from "../Store.js";
import {SONG_CHANGE} from "./actionTypes.js";
import Button from '@material-ui/core/Button';
import Snackbar1 from "../SnackBar/SnackBar1.js"
import {actions as snackAction} from "../SnackBar/"
class Audio extends React.Component {
    componentDidMount() {
        console.log(this.props)
    }

    onAudioEnded() {
        let {activeIndex, songList} = this.props.songs;
		console.log('songs数量：'+songList.length)
		
        activeIndex = activeIndex === songList.length - 1 ? 0 : activeIndex + 1;
		console.log('songs序号：'+activeIndex)
        store.dispatch({
            type: SONG_CHANGE,
            songs: {
				activeIndex
            }
        })
    }
	handleClick = () => {
        this.props.onHandleClick(true,'it is me')
    };

    render() {
        const {activeIndex, songList, isPlay} = this.props.songs;

        if (isPlay) {
            setTimeout(() => {
                this.refs.audio && this.refs.audio.play()
            }, 0)
        } else {
            setTimeout(() => {
                this.refs.audio && this.refs.audio.pause()
            }, 0)
        }
        return (
            <div>
			<Snackbar1 horizontal={'left'} seconds={7000} msg="甚至我觉得像表单填写数据这种操作也应该尽量掌握在组件内部" />
                <audio ref="audio" controls src={songList && songList[activeIndex] } onEnded={this.onAudioEnded.bind(this)}></audio>
			<Snackbar1 horizontal={'center'} seconds={3000} msg=" 组件内部" />	
			<Button onClick={this.handleClick.bind(this)}>Open snackbar action</Button>
            </div>
        )

    }
}


const mapStateToProps = (store) => {
	console.log('songs'+store.songs.songList)
    return {
        snackbar: store.snackbar,
        songs: store.songs
    }
};
const mapDispatchToProps=(dispatch)=>{
	return {
		onHandleClick:(open,msg,seconds)=>{
		dispatch(snackAction.snackbarChange(open,msg,seconds));
	}
	}
};

Audio = connect(mapStateToProps,mapDispatchToProps)(Audio);

export default Audio;