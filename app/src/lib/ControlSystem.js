/**
 * @typedef KeyEventHandler
 * @param {?KeyboardEvent} key - inputed key
 */

/**
 * @typedef KeyEvent
 * @type {object}
 * @property {string} keyPattern - key pattern binding handler
 * @property {KeyEventHandler} keyEventHandler - binding handler
 */

/**
 * @typedef KeyEventData
 * @type {Object.<string, KeyEvent>}
 */

/**
 * @typedef Layer
 * @type {object}
 * @property {KeyEventData} keyEventData
 * @property {boolean} isActive
 */


let instance = null;
export default class ControlSystem {
    /** @type {Object.<string, Layer>} */
    layerList = {
        default: {
            isActive: true,
            keyEventData: {},
        },
    };
    constructor() {
        if (instance !== null) return instance;
        else {
            instance = this;
            window.addEventListener("keypress", (event) => {
                instance.listen(event);
            })
            return this;
        }
    }
    /**
     * @param {string} id - Listener id
     * @param {string} keyPattern - binding key pattern
     * @param {string} layerName - layer of binding key patter
     * @param {KeyEventHandler} keyEventHandler - target event handler
     */
    addKeyEventListener(id, keyPattern, keyEventHandler, layerName = "default") {
        const keyEventId = `${layerName}/${keyPattern}/${id}`
        /** @type {KeyEvent} */
        let keyEvent = {
            keyPattern: keyPattern,
            keyEventHandler: keyEventHandler,
        }
        if (this.layerList[layerName] === undefined) {
            this.layerList[layerName] = {
                isActive: false,
                keyEventData: {}
            }
        }
        this.layerList[layerName].keyEventData[keyEventId] = keyEvent;

        return keyEventId;
    }
    /** 
     * @param {string} keyEventid
     */
    removeKeyEventListener(keyEventid) {
        const [layerName, keyPattern, id] = keyEventid.split("/");
        // console.log("Removed keyEvent");
        // console.log({layerName, keyPattern, id});
        delete this.layerList[layerName].keyEventData[keyEventid];
    }
    /**
     * @param {KeyboardEvent} event
     */
    listen(event) {
        // console.log("listen is called.");
        for (let layer of Object.values(this.layerList)) {
            if (layer.isActive) {
                for (let keyEvent of Object.values(layer.keyEventData)) {
                    if (this.keyMatch(keyEvent.keyPattern)) {
                        keyEvent.keyEventHandler(event);
                    }
                }
            }
        }
    }
    /**
     * 
     * @param {string} keyPattern 
     */
    keyMatch(keyPattern) {
        return true;
    }
}