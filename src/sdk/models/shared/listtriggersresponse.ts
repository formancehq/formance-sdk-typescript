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

export type ListTriggersResponse = {
    data: Array<Trigger>;
};

/** @internal */
export const ListTriggersResponse$inboundSchema: z.ZodType<
    ListTriggersResponse,
    z.ZodTypeDef,
    unknown
> = z.object({
    data: z.array(Trigger$inboundSchema),
});

/** @internal */
export type ListTriggersResponse$Outbound = {
    data: Array<Trigger$Outbound>;
};

/** @internal */
export const ListTriggersResponse$outboundSchema: z.ZodType<
    ListTriggersResponse$Outbound,
    z.ZodTypeDef,
    ListTriggersResponse
> = z.object({
    data: z.array(Trigger$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListTriggersResponse$ {
    /** @deprecated use `ListTriggersResponse$inboundSchema` instead. */
    export const inboundSchema = ListTriggersResponse$inboundSchema;
    /** @deprecated use `ListTriggersResponse$outboundSchema` instead. */
    export const outboundSchema = ListTriggersResponse$outboundSchema;
    /** @deprecated use `ListTriggersResponse$Outbound` instead. */
    export type Outbound = ListTriggersResponse$Outbound;
}
