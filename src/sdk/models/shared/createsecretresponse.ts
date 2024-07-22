/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Secret, Secret$inboundSchema, Secret$Outbound, Secret$outboundSchema } from "./secret.js";
import * as z from "zod";

export type CreateSecretResponse = {
    data?: Secret | undefined;
};

/** @internal */
export const CreateSecretResponse$inboundSchema: z.ZodType<
    CreateSecretResponse,
    z.ZodTypeDef,
    unknown
> = z.object({
    data: Secret$inboundSchema.optional(),
});

/** @internal */
export type CreateSecretResponse$Outbound = {
    data?: Secret$Outbound | undefined;
};

/** @internal */
export const CreateSecretResponse$outboundSchema: z.ZodType<
    CreateSecretResponse$Outbound,
    z.ZodTypeDef,
    CreateSecretResponse
> = z.object({
    data: Secret$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateSecretResponse$ {
    /** @deprecated use `CreateSecretResponse$inboundSchema` instead. */
    export const inboundSchema = CreateSecretResponse$inboundSchema;
    /** @deprecated use `CreateSecretResponse$outboundSchema` instead. */
    export const outboundSchema = CreateSecretResponse$outboundSchema;
    /** @deprecated use `CreateSecretResponse$Outbound` instead. */
    export type Outbound = CreateSecretResponse$Outbound;
}
