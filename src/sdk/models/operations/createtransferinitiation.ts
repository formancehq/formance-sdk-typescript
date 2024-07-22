/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type CreateTransferInitiationResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    /**
     * OK
     */
    transferInitiationResponse?: shared.TransferInitiationResponse | undefined;
};

/** @internal */
export const CreateTransferInitiationResponse$inboundSchema: z.ZodType<
    CreateTransferInitiationResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
        TransferInitiationResponse: shared.TransferInitiationResponse$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
            TransferInitiationResponse: "transferInitiationResponse",
        });
    });

/** @internal */
export type CreateTransferInitiationResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    TransferInitiationResponse?: shared.TransferInitiationResponse$Outbound | undefined;
};

/** @internal */
export const CreateTransferInitiationResponse$outboundSchema: z.ZodType<
    CreateTransferInitiationResponse$Outbound,
    z.ZodTypeDef,
    CreateTransferInitiationResponse
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
        transferInitiationResponse: shared.TransferInitiationResponse$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
            transferInitiationResponse: "TransferInitiationResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateTransferInitiationResponse$ {
    /** @deprecated use `CreateTransferInitiationResponse$inboundSchema` instead. */
    export const inboundSchema = CreateTransferInitiationResponse$inboundSchema;
    /** @deprecated use `CreateTransferInitiationResponse$outboundSchema` instead. */
    export const outboundSchema = CreateTransferInitiationResponse$outboundSchema;
    /** @deprecated use `CreateTransferInitiationResponse$Outbound` instead. */
    export type Outbound = CreateTransferInitiationResponse$Outbound;
}
