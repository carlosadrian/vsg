/**
 * Vue Sphere Gallery
 * @description Gallery motion using DeviceOrientationEvent data.
 *              Features:
 *              - Movement is proportional to x and y inclination angle.
 *              - Left and Top boundaries
 * @author Carlos Adrián Morales
 * @license MIT
 * @version dev / WIP
 */

type GalleryPosition = { x: number, y: number };
type GalleryTheshold = { deg: number, px: number};

export default class Gallery {

    selector : string;

    position: GalleryPosition = {
        x: 0,
        y: 0
    };

    previous : GalleryPosition = {
        x: 0,
        y: 0,
    };

    element : HTMLElement;

    offsetX : number;

    offsetY : number;

    positionFactorX : number;

    positionFactorY : number;

    // How many degrees makes the grid moves 1 pixel
    threshold: GalleryTheshold = {
        deg: 10,
        px: 3
    };

    constructor() {
        this.element = document.querySelector('.gallery-clipping');
    }

    /**
     * Sets gallery position of the top left corner at viewport and returns it
     * @param e
     * e.absolute
     * e.alpha rotation 360 deg
     * e.beta ↕
     * e.gamma ◄ ►
     */
    getPosition(e: DeviceOrientationEvent) : GalleryPosition {
        let gamma = parseFloat(e.gamma.toPrecision(4)),
            beta = parseFloat(e.beta.toPrecision(4)),
            posY,
            posX;

        this.element = document.querySelector('.gallery-clipping');
        this.offsetX = (this.element.clientWidth / 6) + 2;
        this.offsetY = (this.element.querySelector('ul').clientHeight / 2) + 2;
        this.positionFactorX = 10.2;
        this.positionFactorY = 34.8;

        document.querySelector('.do-x').textContent = gamma.toString();
        document.querySelector('.do-y').textContent = beta.toString();


        // Set coordinates at top / left
        posY = ((beta * this.positionFactorY) - this.offsetY);
        posX = ((gamma * this.positionFactorX) - this.offsetX);
        if(posY < 0)
            this.element.style.top = posY.toString() + 'px';

        if(posX < 0)
            this.element.style.left =  posX.toString() + 'px';

        return this.position;
    }

    /**
     * Handles the permission for device orientation and attaches the event handler.
     */
    init() : void {
        // Event handling
        DeviceOrientationEvent.requestPermission().then(function(response : string) {
            if(response === 'granted') {
                let gallery = new Gallery();
                document.querySelector('h3').remove();
                window.addEventListener('deviceorientation', gallery.getPosition);
            }
        }).catch(function(e : { message : string, [s : string] : any }) {
            document.querySelector('h3').textContent += ' Nope: ' + e.message;
        });
    }

}


