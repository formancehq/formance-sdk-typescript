/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    Transaction,
    Transaction$inboundSchema,
    Transaction$Outbound,
    Transaction$outboundSchema,
} from "./transaction.js";
import * as z from "zod";

export type TransactionsResponse = {
    data: Array<Transaction>;
};

/** @internal */
export const TransactionsResponse$inboundSchema: z.ZodType<
    TransactionsResponse,
    z.ZodTypeDef,
    unknown
> = z.object({
    data: z.array(Transaction$inboundSchema),
});

/** @internal */
export type TransactionsResponse$Outbound = {
    data: Array<Transaction$Outbound>;
};

/** @internal */
export const TransactionsResponse$outboundSchema: z.ZodType<
    TransactionsResponse$Outbound,
    z.ZodTypeDef,
    TransactionsResponse
> = z.object({
    data: z.array(Transaction$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TransactionsResponse$ {
    /** @deprecated use `TransactionsResponse$inboundSchema` instead. */
    export const inboundSchema = TransactionsResponse$inboundSchema;
    /** @deprecated use `TransactionsResponse$outboundSchema` instead. */
    export const outboundSchema = TransactionsResponse$outboundSchema;
    /** @deprecated use `TransactionsResponse$Outbound` instead. */
    export type Outbound = TransactionsResponse$Outbound;
}
