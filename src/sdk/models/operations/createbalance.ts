/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type CreateBalanceRequest = {
    id: string;
    createBalanceRequest?: shared.CreateBalanceRequest | undefined;
};

/** @internal */
export namespace CreateBalanceRequest$ {
    export const inboundSchema: z.ZodType<CreateBalanceRequest, z.ZodTypeDef, unknown> = z
        .object({
            id: z.string(),
            CreateBalanceRequest: shared.CreateBalanceRequest$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                id: v.id,
                ...(v.CreateBalanceRequest === undefined
                    ? null
                    : { createBalanceRequest: v.CreateBalanceRequest }),
            };
        });

    export type Outbound = {
        id: string;
        CreateBalanceRequest?: shared.CreateBalanceRequest$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateBalanceRequest> = z
        .object({
            id: z.string(),
            createBalanceRequest: shared.CreateBalanceRequest$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                id: v.id,
                ...(v.createBalanceRequest === undefined
                    ? null
                    : { CreateBalanceRequest: v.createBalanceRequest }),
            };
        });
}
