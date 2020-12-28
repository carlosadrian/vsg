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

type ScrollablePosition = { x: number, y: number };
type ScrollableThreshold = { deg: number, px: number};

export default class Scrollable {

    selector : string;

    position: ScrollablePosition = {
        x: 0,
        y: 0
    };

    previous : ScrollablePosition = {
        x: 0,
        y: 0,
    };

    element : HTMLElement;

    offsetX : number;

    offsetY : number;

    positionFactorX : number;

    positionFactorY : number;

    // How many degrees makes the grid moves 1 pixel
    threshold: ScrollableThreshold = {
        deg: 10,
        px: 3
    };

    constructor() {
    }

    /**
     * Sets gallery position of the top left corner at viewport and returns it
     * @param element HTMLElement An element to change position according to event
     * @param e DeviceOrientationEvent The event returned with proper coordinates
     * e.absolute
     * e.alpha rotation 360 deg
     * e.beta ↕ along y axis
     * e.gamma ◄ ► along x axis
     */
    setPosition(element: HTMLElement, e: DeviceOrientationEvent) : ScrollablePosition {
        let gamma = parseFloat(e.gamma.toPrecision(4)),
            beta = parseFloat(e.beta.toPrecision(4)),
            draggable = element.querySelector('ul'),
            posY,
            posX;

        this.offsetX = (element.clientWidth / 6) + 2;
        this.offsetY = (draggable.clientHeight / 2) + 2;
        this.positionFactorX = (draggable.clientWidth / 30);
        this.positionFactorY = (draggable.clientHeight / 40);

        // Set coordinates at top / left
        posX = ((gamma * this.positionFactorX) - this.offsetX).toPrecision(4);
        posY = ((beta * this.positionFactorY) - this.offsetY).toPrecision(4);

        if(posX < 0)
            element.style.left =  posX + 'px';

        if(posY < 0)
            element.style.top = posY + 'px';

        if(process.env.VUE_APP_DEBUG_ENABLED) {
            this.debug(`${gamma.toString()} , ${beta.toString()}. Position: ${posX}, ${posY}`);
        }

        return { x: posX, y: posY }; // this.position;
    }

    debug(msg : string): void {
        document.querySelector('.debug').textContent = msg;
    }

    /**
     * Handles the permission for device orientation and attaches the event handler.
     */
    static init(selector: string) : void {
        // Event handling
        DeviceOrientationEvent.requestPermission().then(function(response : string) {
            if(response === 'granted') {
                let element = document.querySelector(selector);
                let g = new Scrollable();
                window.addEventListener('deviceorientation', function(e) {
                    g.setPosition(element as HTMLElement, e);
                });
            }
        }).catch(function(e : { message : string, [s : string] : any }) {
            document.querySelector('.debug').textContent = ' Nope: ' + e.message;
        });
    }

}


