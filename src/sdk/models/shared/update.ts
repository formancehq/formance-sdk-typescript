/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { UpdateAccount, UpdateAccount$ } from "./updateaccount";
import * as z from "zod";

export type Update = {
    account?: UpdateAccount | undefined;
};

/** @internal */
export namespace Update$ {
    export const inboundSchema: z.ZodType<Update, z.ZodTypeDef, unknown> = z
        .object({
            account: UpdateAccount$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.account === undefined ? null : { account: v.account }),
            };
        });

    export type Outbound = {
        account?: UpdateAccount$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Update> = z
        .object({
            account: UpdateAccount$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.account === undefined ? null : { account: v.account }),
            };
        });
}
