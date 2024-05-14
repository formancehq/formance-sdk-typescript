/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type ReadClientRequest = {
    /**
     * Client ID
     */
    clientId: string;
};

/** @internal */
export namespace ReadClientRequest$ {
    export const inboundSchema: z.ZodType<ReadClientRequest, z.ZodTypeDef, unknown> = z
        .object({
            clientId: z.string(),
        })
        .transform((v) => {
            return {
                clientId: v.clientId,
            };
        });

    export type Outbound = {
        clientId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ReadClientRequest> = z
        .object({
            clientId: z.string(),
        })
        .transform((v) => {
            return {
                clientId: v.clientId,
            };
        });
}
