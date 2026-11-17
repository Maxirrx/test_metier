import { Contract, ContractType, ContractStatus } from "./ContractEntity.js";
import { ObjectId } from "mongodb";


export class ContractCompany extends Contract {
    constructor(
        _id: ObjectId,
        type: ContractType,
        adhesionId: ObjectId,
        date: Date,
        status: ContractStatus,
        public entreprise: string
    ) {
        super(_id, type, adhesionId, date, status);
        this.validateCompany()
    }

    private validateCompany(){
        if(this.entreprise.trim() == ""){
            throw new Error("Entreprise invalide");
        }
    }
}