import { ContractCompany } from "./ContractCompanyEntity.js";
import { ContractType, ContractStatus } from "./ContractEntity.js"
import { ObjectId } from "mongodb";


export class ContractPEI extends ContractCompany {
    constructor(
        _id: ObjectId,
        adhesionId: ObjectId,
        date: Date,
        status: ContractStatus,
        entreprise: string
    ) {
        super(_id, ContractType.PEI, adhesionId, date, status, entreprise);
        this.validatePEI()
    }

    private validatePEI(){
        if(this.status == "cancel"){
            throw new Error("A PEI can't be cancel")
        }
    }
}