/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type TransferResponse = {
    id?: string | undefined;
};

/** @internal */
export namespace TransferResponse$ {
    export const inboundSchema: z.ZodType<TransferResponse, z.ZodTypeDef, unknown> = z.object({
        id: z.string().optional(),
    });

    export type Outbound = {
        id?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TransferResponse> = z.object({
        id: z.string().optional(),
    });
}
