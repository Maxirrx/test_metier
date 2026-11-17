import type { Rule } from "../Interface/Rule.ts";
import type { ObjectId } from "mongodb";

export class IsFirstPERO implements Rule<ObjectId> {

    public async check(adhesionId: ObjectId):Promise<boolean> {
        return true;
    }
}