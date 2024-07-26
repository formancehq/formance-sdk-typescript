/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type CreateWalletRequest = {
    /**
     * Custom metadata to attach to this wallet.
     */
    metadata: { [k: string]: string };
    name: string;
};

/** @internal */
export const CreateWalletRequest$inboundSchema: z.ZodType<
    CreateWalletRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    metadata: z.record(z.string()),
    name: z.string(),
});

/** @internal */
export type CreateWalletRequest$Outbound = {
    metadata: { [k: string]: string };
    name: string;
};

/** @internal */
export const CreateWalletRequest$outboundSchema: z.ZodType<
    CreateWalletRequest$Outbound,
    z.ZodTypeDef,
    CreateWalletRequest
> = z.object({
    metadata: z.record(z.string()),
    name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateWalletRequest$ {
    /** @deprecated use `CreateWalletRequest$inboundSchema` instead. */
    export const inboundSchema = CreateWalletRequest$inboundSchema;
    /** @deprecated use `CreateWalletRequest$outboundSchema` instead. */
    export const outboundSchema = CreateWalletRequest$outboundSchema;
    /** @deprecated use `CreateWalletRequest$Outbound` instead. */
    export type Outbound = CreateWalletRequest$Outbound;
}
