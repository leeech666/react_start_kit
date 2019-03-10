import {SONG_CHANGE} from "./actionTypes.js";

const initState = {
    // 当前播放列表
    songList: ["./music/[beyonce]Ave Maria-Beyonce.mp3","./music/[beyonce]check on it-beyonce.mp3","Alicia Keys - Wait To You See My Smile.mp3","./music/[beyonce]Baby Boy-Beyonce.mp3"],
    // 当前播放歌曲索引
    activeIndex: 0,
    // 精选列表
    qualitySongList: [],
    // 私人定制列表
    customiseSongList: [],
    // 收藏列表
    collectSongList: [],
    isPlay: false
}

export default function(state = initState, action){
    switch(action.type){
        case SONG_CHANGE:
            return {
                ...Object.assign(initState, action.songs)
            };
        default:
            return state
    }
}