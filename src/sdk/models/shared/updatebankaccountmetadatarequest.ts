/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type UpdateBankAccountMetadataRequest = {
    metadata: { [k: string]: string } | null;
};

/** @internal */
export const UpdateBankAccountMetadataRequest$inboundSchema: z.ZodType<
    UpdateBankAccountMetadataRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    metadata: z.nullable(z.record(z.string())),
});

/** @internal */
export type UpdateBankAccountMetadataRequest$Outbound = {
    metadata: { [k: string]: string } | null;
};

/** @internal */
export const UpdateBankAccountMetadataRequest$outboundSchema: z.ZodType<
    UpdateBankAccountMetadataRequest$Outbound,
    z.ZodTypeDef,
    UpdateBankAccountMetadataRequest
> = z.object({
    metadata: z.nullable(z.record(z.string())),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateBankAccountMetadataRequest$ {
    /** @deprecated use `UpdateBankAccountMetadataRequest$inboundSchema` instead. */
    export const inboundSchema = UpdateBankAccountMetadataRequest$inboundSchema;
    /** @deprecated use `UpdateBankAccountMetadataRequest$outboundSchema` instead. */
    export const outboundSchema = UpdateBankAccountMetadataRequest$outboundSchema;
    /** @deprecated use `UpdateBankAccountMetadataRequest$Outbound` instead. */
    export type Outbound = UpdateBankAccountMetadataRequest$Outbound;
}
