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

export abstract class Contract {
    protected constructor(
        public _id: ObjectId,
        public readonly type: ContractType,
        public adhesionId: ObjectId,
        public date: Date,
        public status: ContractStatus,
    ) {
        this.validateContract()
    }

    private validateContract(): void {
        if (isNaN(this.date.getTime())) {
            throw new Error("Date invalide");
        }

        if (!Object.values(ContractStatus).includes(this.status)) {
            throw new Error("Statut invalide");
        }
    }
}