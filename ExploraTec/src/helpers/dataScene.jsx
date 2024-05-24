import insideOne from '../images/img2.png';
import insideLibrary from '../images/img3.png';
import insideTwo from '../images/img4.png';
import insideGoScene from '../images/img5.png';
import inside4B from '../images/img6.png';

const Scene = {
    insideOne: {
        title: 'Interior 1',
        image: insideOne,
        pitch: -11,
        yaw: -3,
        hotSpots: {
            plane: {
                type: 'custom',
                pitch: -8,
                yaw: 126,
                cssClass: 'hotSpotElement'
            },
            nextScene: {
                type: 'custom',
                pitch: 8,
                yaw: -6,
                cssClass: 'moveScene',
                scene:'insideTwo'
            },
            SceneLibrary: {
                type: 'custom',
                pitch: 5,
                yaw: -44,
                cssClass: 'moveScene',
                scene:'insideLibrary'
            }
        }
    },
    insideTwo:{
        title:'Interior 2',
        image:insideTwo,
        pitch: 10,
        yaw:180,
        hotSpots:{
            backScene: {
                type: 'custom',
                pitch: 1,
                yaw: 77,
                cssClass: 'moveScene',
                scene:'insideOne'
            },
            Scene4B: {
                type: 'custom',
                pitch: 13,
                yaw: -23,
                cssClass: 'moveScene',
                scene:'inside4B'
            }
        }
    },
    insideLibrary:{
        title:'Interior 3',
        image:insideLibrary,
        pitch: 10,
        yaw:180,
        hotSpots:{
            backScene: {
                type: 'custom',
                pitch: 1,
                yaw: 77,
                cssClass: 'moveScene',
                scene:'insideOne'
            },
            goScene: {
                type: 'custom',
                pitch: -3,
                yaw: -56,
                cssClass: 'moveScene',
                scene:'insideGoScene'
            }
        }
    },
    insideGoScene:{
        title:'Interior 5',
        image:insideGoScene,
        pitch: 10,
        yaw:180,
        hotSpots:{
            backScene: {
                type: 'custom',
                pitch: 0,
                yaw: -72,
                cssClass: 'moveScene',
                scene:'insideLibrary'
            }
        }
    },
    inside4B:{
        title:'Interior 6',
        image:inside4B,
        pitch: 10,
        yaw:180,
        hotSpots:{
            backScene: {
                type: 'custom',
                pitch: -14,
                yaw: 119,
                cssClass: 'moveScene',
                scene:'insideTwo'
            }
        }
    },
};

export default Scene;
