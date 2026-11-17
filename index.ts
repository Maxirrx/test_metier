import { ObjectId } from "mongodb";
import { ContractStatus } from "./App/Entity/ContractEntity.js";
import { ContractPERO } from "./App/Entity/ContractPeroEntity.js";
import { ContractPEI } from "./App/Entity/ContractPeiEntity.js";
import { ContractPERIN } from "./App/Entity/ContractPerinEntity.js";

// Cas valides
const contracts = [
    new ContractPERO(
        new ObjectId(),
        new ObjectId(),
        new Date(),
        ContractStatus.DRAFT,
        "Entreprise A"
    ),

    new ContractPERO(
        new ObjectId(),
        new ObjectId(),
        new Date("2026-01-15"),
        ContractStatus.OK,
        "Entreprise B"
    ),

    new ContractPEI(
        new ObjectId(),
        new ObjectId(),
        new Date(),
        ContractStatus.DRAFT,
        "Entreprise C"
    ),

    new ContractPERIN(
        new ObjectId(),
        new ObjectId(),
        new Date(),
        ContractStatus.OK,
        "Entreprise D"
    )
];

console.log("Contrats créés :", contracts);

try {
    const invalidPERO = new ContractPERO(
        new ObjectId(),
        new ObjectId(),
        new Date(),
        ContractStatus.DRAFT,
        ""
    );

    console.log(invalidPERO);
} catch (error) {
    console.error("Erreur attendue :", error);
}

try {
    const invalidPERO = new ContractPERO(
        new ObjectId(),
        new ObjectId(),
        new Date("invalid"),
        ContractStatus.OK,
        "Entreprise E"
    );

    console.log(invalidPERO);
} catch (error) {
    console.error("Erreur attendue :", error);
}