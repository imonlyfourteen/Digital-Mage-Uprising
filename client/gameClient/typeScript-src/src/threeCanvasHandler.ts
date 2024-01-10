import { ThreeCanvasDelegate } from "./threeCanvasDelegate";

export class ThreeCanvasHandler implements ThreeCanvasDelegate {
    private application: any;

    threeCanvasDidUpdateCanvas(
        threeCanvas: any, 
        canvas: any
    ) {
        const output = JSON.stringify(canvas);
        this
            .application
            .ports
            .nativeCanvasReceiver
            .send(output);
            console.log("sent canvas to Elm");            
    }

    threeCanvasButtonDidPress(
        threeCanvas: any, 
        name: string
    ): void {
        this
            .application
            .ports
            .buttonPressedReceiver
            .send(name);
            console.log("sent button pressed to Elm: " + name);          
    }
}

// @ts-ignore
document.threeCanvasHandlerLoaded(new ThreeCanvasHandler());