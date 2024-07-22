/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * A set of key/value pairs that you can attach to a transfer object.
 *
 * @remarks
 * It can be useful for storing additional information about the transfer in a structured format.
 *
 */
export type V2ActivityStripeTransferMetadata = {};

export type V2ActivityStripeTransfer = {
    amount?: bigint | undefined;
    asset?: string | undefined;
    connectorID?: string | undefined;
    destination?: string | undefined;
    /**
     * A set of key/value pairs that you can attach to a transfer object.
     *
     * @remarks
     * It can be useful for storing additional information about the transfer in a structured format.
     *
     */
    metadata?: V2ActivityStripeTransferMetadata | undefined;
    waitingValidation?: boolean | undefined;
};

/** @internal */
export const V2ActivityStripeTransferMetadata$inboundSchema: z.ZodType<
    V2ActivityStripeTransferMetadata,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type V2ActivityStripeTransferMetadata$Outbound = {};

/** @internal */
export const V2ActivityStripeTransferMetadata$outboundSchema: z.ZodType<
    V2ActivityStripeTransferMetadata$Outbound,
    z.ZodTypeDef,
    V2ActivityStripeTransferMetadata
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2ActivityStripeTransferMetadata$ {
    /** @deprecated use `V2ActivityStripeTransferMetadata$inboundSchema` instead. */
    export const inboundSchema = V2ActivityStripeTransferMetadata$inboundSchema;
    /** @deprecated use `V2ActivityStripeTransferMetadata$outboundSchema` instead. */
    export const outboundSchema = V2ActivityStripeTransferMetadata$outboundSchema;
    /** @deprecated use `V2ActivityStripeTransferMetadata$Outbound` instead. */
    export type Outbound = V2ActivityStripeTransferMetadata$Outbound;
}

/** @internal */
export const V2ActivityStripeTransfer$inboundSchema: z.ZodType<
    V2ActivityStripeTransfer,
    z.ZodTypeDef,
    unknown
> = z.object({
    amount: z
        .number()
        .transform((v) => BigInt(v))
        .optional(),
    asset: z.string().optional(),
    connectorID: z.string().optional(),
    destination: z.string().optional(),
    metadata: z.lazy(() => V2ActivityStripeTransferMetadata$inboundSchema).optional(),
    waitingValidation: z.boolean().default(false),
});

/** @internal */
export type V2ActivityStripeTransfer$Outbound = {
    amount?: number | undefined;
    asset?: string | undefined;
    connectorID?: string | undefined;
    destination?: string | undefined;
    metadata?: V2ActivityStripeTransferMetadata$Outbound | undefined;
    waitingValidation: boolean;
};

/** @internal */
export const V2ActivityStripeTransfer$outboundSchema: z.ZodType<
    V2ActivityStripeTransfer$Outbound,
    z.ZodTypeDef,
    V2ActivityStripeTransfer
> = z.object({
    amount: z
        .bigint()
        .transform((v) => Number(v))
        .optional(),
    asset: z.string().optional(),
    connectorID: z.string().optional(),
    destination: z.string().optional(),
    metadata: z.lazy(() => V2ActivityStripeTransferMetadata$outboundSchema).optional(),
    waitingValidation: z.boolean().default(false),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2ActivityStripeTransfer$ {
    /** @deprecated use `V2ActivityStripeTransfer$inboundSchema` instead. */
    export const inboundSchema = V2ActivityStripeTransfer$inboundSchema;
    /** @deprecated use `V2ActivityStripeTransfer$outboundSchema` instead. */
    export const outboundSchema = V2ActivityStripeTransfer$outboundSchema;
    /** @deprecated use `V2ActivityStripeTransfer$Outbound` instead. */
    export type Outbound = V2ActivityStripeTransfer$Outbound;
}
