import { ObjectId } from "mongodb";

export enum ContractType {
    PERO = "PERO",
    PERIN = "PERIN",
    PEI = "PEI"
}

export enum ContractStatus {
    DRAFT = "draft",
    CANCEL = "cancel",
    OK = "ok"
}

export interface Contract {
    _id?: ObjectId;
    type: ContractType;
    adhesionId: number;
    date: Date;
    status: ContractStatus;
    entreprise: string;
}