import { createStore } from "redux";

const initialState = {
    players: [{
        id: 1,
        name: 'Gus',
        pic: "https://davicorespana.com/wp-content/uploads/2018/07/Gus-Tudela-3-1-1024x958.jpg",

    },
    {
        id: 2,
        name: "Didac Plana",
        pic: 'https://lnfs.es/media/lnfs/2022/img_players/2.jpg?size=120x&v=16223632520',

    },
    {
        id: 3,
        name: "Anderson",
        pic: "https://nuevaalcarria.com/img/articulos/107/images/ASCENSO%203.jpg",

    },
    {
        id: 4,
        name: 'Paulo Roberto' ,
        pic: 'https://i0.wp.com/sextoanillo.com/wp-content/uploads/2020/06/unnamed.jpg?fit=413%2C466&ssl=1',

    },
    {
        id: 5,
        name: 'Lenisio',
        pic: 'https://pbs.twimg.com/media/DkvpxV1XgAEm9_U.jpg',

    },
    {
        id: 6,
        name: 'Bacaro',
        pic: 'https://static2.laverdad.es/www/pre2017/multimedia/murcia/prensa/noticias/200801/27/fotos/080D7LORP1_1.jpg',

    },
    {
        id: 7,
        name: 'Wilde',
        pic: 'https://futsalliga.cz/files/thumbnails/2019094-22-45-18-wilde-1-thumb-235-313-1567629918.jpg',

    },
    {
        id: 8,
        name: 'Kike',
        pic: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/08/12/15655999430907.gif',

    },
    {
        id: 9,
        name: 'Falcao',
        pic: 'https://futsalfeed.com/uploads/images/original_post/seo_image/420/medium_235f7356-37e8-45a9-90c9-3402db0000e1.jpg',

    },
    {
        id: 10,
        name: 'Ricardinho',
        pic: 'https://media.rpctv.com/p/f35a3babd41b0d678b1d0b28a71a79ce/adjuntos/314/imagenes/017/490/0017490087/1200x1200/smart/000_zd3q1jpg.jpg',

    },
    {
        id: 11,
        name: 'Vinicius',
        pic: 'https://e00-marca.uecdn.es/imagenes/2009/07/13/futbol/futbol_sala/1247499348_0.jpg',

    },
    {
        id: 12,
        name: 'Schumacher',
        pic: 'https://e00-marca.uecdn.es/imagenes/2009/06/10/futbol/futbol_sala/1244660915_extras_portadilla_0.jpg',

    }
    ],
    starting: [],
    subtitute: [],
}

const managerReducer = (state = initialState, action) => {
    console.log(action)
    switch(action.type){
        case 'players/addStarter':
            return {    
                ...state,
                starting: state.starting.concat(action.player),
                players: state.players.filter(p => p.id !== action.player.id)
            }
            case 'players/addSubtitute':
                return {    
                    ...state,
                    subtitute: state.subtitute.concat(action.player),
                    players: state.players.filter(p => p.id !== action.player.id)
                }
                case 'players/removeStarter':
                    return {    
                        ...state,
                        starting: state.starting.filter(s => s.id !== action.player.id),
                        players: state.players.concat(action.player)
                    }
                case 'players/removeSubtitute':
                    return {
                        ...state,
                        subtitute: state.subtitute.filter(s => s.id !== action.player.id),
                        players: state.players.concat(action.player)
                    }    
                default:
                    return state
    }
    
}

export const store = createStore(managerReducer)