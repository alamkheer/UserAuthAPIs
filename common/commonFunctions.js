import jwt from "jsonwebtoken";
export default {
    requiredFieldsValidation : (obj={},reqArray=[])=>{
        if(reqArray && reqArray.length){
            if(Object.keys(obj).length){
                let reqtemp=Object.keys(obj).filter(key=>!reqArray.includes(key));
                if(reqtemp.length){
                    return { validation: false, message: `Required fields ${reqArray.toString} ${reqtemp.length > 1 ? 'are' : 'is'} missing.` }
                }else{
                    return { validation: true, message: `All fields are present` }
                }
            }else{
                return {validation :false, message:`Required fields ${reqArray.toString} are missing.`}
            }
        }else{
            return {validation :true, message:`Nothing to validate`}
        }    
    }
}