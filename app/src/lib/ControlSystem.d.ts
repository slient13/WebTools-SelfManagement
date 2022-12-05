import "./ControlSystem.js"

export default class ControlSystem {
    instance = null;
    layerList = {
        default: {
            isActive: true,
            keyEventData: {},
        },
    };
    constructor(): void;
    addKeyEventListener(id: string, keyPattern: string, keyEventHandler:(KeyboardEvent) => void, layerName: string = "default"): string;
    removeKeyEventListener(keyEventid: string): void;
    listen(event): void;
    keyMatch(keyPattern): boolean;
}
