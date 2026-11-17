import { isTnsInfo } from "../Service/IsTnsInfoCheck.js";
import { Contract, ContractType, ContractStatus } from "./ContractEntity.js";
import { ObjectId } from "mongodb";


export class ContractPERIN extends Contract {
    constructor(
        _id: ObjectId,
        adhesionId: ObjectId,
        date: Date,
        status: ContractStatus,
        public tnsInfo: string
    ) {
        super(_id, ContractType.PERIN, adhesionId, date, status);
        this.validatePERIN()
    }
    private validatePERIN(){
        const rules = {IsTnsInfo: new isTnsInfo()}
        if(!rules.IsTnsInfo.check(this.tnsInfo)){
            throw new Error("This Information aren't exact");
        }
    }
}