/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type ForwardBankAccountRequest = {
    connectorID: string;
};

/** @internal */
export namespace ForwardBankAccountRequest$ {
    export const inboundSchema: z.ZodType<ForwardBankAccountRequest, z.ZodTypeDef, unknown> = z
        .object({
            connectorID: z.string(),
        })
        .transform((v) => {
            return {
                connectorID: v.connectorID,
            };
        });

    export type Outbound = {
        connectorID: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ForwardBankAccountRequest> = z
        .object({
            connectorID: z.string(),
        })
        .transform((v) => {
            return {
                connectorID: v.connectorID,
            };
        });
}
