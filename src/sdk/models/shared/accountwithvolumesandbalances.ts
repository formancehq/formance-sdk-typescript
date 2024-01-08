/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { objectToClass, SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Volume } from "./volume";
import { Expose, Transform } from "class-transformer";

export class AccountWithVolumesAndBalances extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "address" })
    address: string;

    @SpeakeasyMetadata()
    @Expose({ name: "balances" })
    balances?: Record<string, number>;

    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    metadata?: Record<string, any>;

    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: string;

    @SpeakeasyMetadata({ elemType: Volume })
    @Expose({ name: "volumes" })
    @Transform(
        ({ value }) => {
            const obj: Record<string, Volume> = {};
            for (const key in value) {
                obj[key] = objectToClass(value[key], Volume);
            }
            return obj;
        },
        { toClassOnly: true }
    )
    volumes?: Record<string, Volume>;
}
