import { SceneObjectCommand } from "./sceneObjectCommand.js";
import { SceneObjectCommandPerformer } from "./sceneObjectCommandPerformer.js";
import { float } from "./types.js";

export class ScriptControls extends SceneObjectCommandPerformer {

    private command?: SceneObjectCommand

    step(delta: float) {
        super.step(delta)

        if (this.command != null) {
            if (this.command.isExpired()) {
                
            }
            else {
                this.handleCommand(this.command)
            }    
        }

    }

}