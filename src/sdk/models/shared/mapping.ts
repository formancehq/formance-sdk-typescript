/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    Contract,
    Contract$inboundSchema,
    Contract$Outbound,
    Contract$outboundSchema,
} from "./contract.js";
import * as z from "zod";

export type Mapping = {
    contracts: Array<Contract>;
};

/** @internal */
export const Mapping$inboundSchema: z.ZodType<Mapping, z.ZodTypeDef, unknown> = z.object({
    contracts: z.array(Contract$inboundSchema),
});

/** @internal */
export type Mapping$Outbound = {
    contracts: Array<Contract$Outbound>;
};

/** @internal */
export const Mapping$outboundSchema: z.ZodType<Mapping$Outbound, z.ZodTypeDef, Mapping> = z.object({
    contracts: z.array(Contract$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Mapping$ {
    /** @deprecated use `Mapping$inboundSchema` instead. */
    export const inboundSchema = Mapping$inboundSchema;
    /** @deprecated use `Mapping$outboundSchema` instead. */
    export const outboundSchema = Mapping$outboundSchema;
    /** @deprecated use `Mapping$Outbound` instead. */
    export type Outbound = Mapping$Outbound;
}
