
import { pageComponents } from "./data.js";

// function to validate all components //

export function validateComponents(componentsObj){

    if(typeof componentsObj !== "object" || Object.keys(componentsObj).length === 0){
        
        return false;
    }

    const components = Object.entries(componentsObj);


    for(const [keys , values] of components){
        
        if(typeof values !== "object"){

            return false;
        }

        if(!Array.isArray(values.data) || !Array.isArray(values.targets)){

            return false;
        }

        for (const data of values.data) {

                
            if(typeof data !== "object"){

                return false;
            }

        }

        for (const target of values.targets) {
                
            if(typeof target !== "object"){

                return false;
            }

        }

        return true;

    }

}


validateComponents(pageComponents);