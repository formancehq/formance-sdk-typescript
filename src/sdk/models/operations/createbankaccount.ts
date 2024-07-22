/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type CreateBankAccountResponse = {
    /**
     * OK
     */
    bankAccountResponse?: shared.BankAccountResponse | undefined;
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
};

/** @internal */
export const CreateBankAccountResponse$inboundSchema: z.ZodType<
    CreateBankAccountResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        BankAccountResponse: shared.BankAccountResponse$inboundSchema.optional(),
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
    })
    .transform((v) => {
        return remap$(v, {
            BankAccountResponse: "bankAccountResponse",
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type CreateBankAccountResponse$Outbound = {
    BankAccountResponse?: shared.BankAccountResponse$Outbound | undefined;
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const CreateBankAccountResponse$outboundSchema: z.ZodType<
    CreateBankAccountResponse$Outbound,
    z.ZodTypeDef,
    CreateBankAccountResponse
> = z
    .object({
        bankAccountResponse: shared.BankAccountResponse$outboundSchema.optional(),
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
    })
    .transform((v) => {
        return remap$(v, {
            bankAccountResponse: "BankAccountResponse",
            contentType: "ContentType",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateBankAccountResponse$ {
    /** @deprecated use `CreateBankAccountResponse$inboundSchema` instead. */
    export const inboundSchema = CreateBankAccountResponse$inboundSchema;
    /** @deprecated use `CreateBankAccountResponse$outboundSchema` instead. */
    export const outboundSchema = CreateBankAccountResponse$outboundSchema;
    /** @deprecated use `CreateBankAccountResponse$Outbound` instead. */
    export type Outbound = CreateBankAccountResponse$Outbound;
}
