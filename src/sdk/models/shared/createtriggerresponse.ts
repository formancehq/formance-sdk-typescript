/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    Trigger,
    Trigger$inboundSchema,
    Trigger$Outbound,
    Trigger$outboundSchema,
} from "./trigger.js";
import * as z from "zod";

export type CreateTriggerResponse = {
    data: Trigger;
};

/** @internal */
export const CreateTriggerResponse$inboundSchema: z.ZodType<
    CreateTriggerResponse,
    z.ZodTypeDef,
    unknown
> = z.object({
    data: Trigger$inboundSchema,
});

/** @internal */
export type CreateTriggerResponse$Outbound = {
    data: Trigger$Outbound;
};

/** @internal */
export const CreateTriggerResponse$outboundSchema: z.ZodType<
    CreateTriggerResponse$Outbound,
    z.ZodTypeDef,
    CreateTriggerResponse
> = z.object({
    data: Trigger$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateTriggerResponse$ {
    /** @deprecated use `CreateTriggerResponse$inboundSchema` instead. */
    export const inboundSchema = CreateTriggerResponse$inboundSchema;
    /** @deprecated use `CreateTriggerResponse$outboundSchema` instead. */
    export const outboundSchema = CreateTriggerResponse$outboundSchema;
    /** @deprecated use `CreateTriggerResponse$Outbound` instead. */
    export type Outbound = CreateTriggerResponse$Outbound;
}
