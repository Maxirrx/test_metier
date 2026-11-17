import { IsFirstPERO } from "../Repository/IsFirstPero.js";
import { ContractCompany } from "./ContractCompanyEntity.js";
import { ContractType, ContractStatus } from "./ContractEntity.js"
import { ObjectId } from "mongodb";

export class ContractPERO extends ContractCompany {
    constructor(
        _id: ObjectId,
        adhesionId: ObjectId,
        date: Date,
        status: ContractStatus,
        entreprise: string
    ) {
        super(_id, ContractType.PERO, adhesionId, date, status, entreprise);
        this.validatePERO()
    }

    private validatePERO(){
        const rules = {
            isFirstPero: new IsFirstPERO()
        };

        if (!rules.isFirstPero.check(this.adhesionId)) {
            throw new Error("This company already have a PERO contract");
        }
    }
}