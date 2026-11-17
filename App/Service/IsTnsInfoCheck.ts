import type { Rule } from "../Interface/Rule.ts";

export class isTnsInfo implements Rule<string> {

    public async check(tnsInfo: string):Promise<boolean> {
        return true;
    }
}