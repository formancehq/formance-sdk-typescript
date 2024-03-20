/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type ForwardBankAccountRequest = {
    forwardBankAccountRequest: shared.ForwardBankAccountRequest;
    /**
     * The bank account ID.
     */
    bankAccountId: string;
};

export type ForwardBankAccountResponse = {
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
export namespace ForwardBankAccountRequest$ {
    export type Inbound = {
        ForwardBankAccountRequest: shared.ForwardBankAccountRequest$.Inbound;
        bankAccountId: string;
    };

    export const inboundSchema: z.ZodType<ForwardBankAccountRequest, z.ZodTypeDef, Inbound> = z
        .object({
            ForwardBankAccountRequest: shared.ForwardBankAccountRequest$.inboundSchema,
            bankAccountId: z.string(),
        })
        .transform((v) => {
            return {
                forwardBankAccountRequest: v.ForwardBankAccountRequest,
                bankAccountId: v.bankAccountId,
            };
        });

    export type Outbound = {
        ForwardBankAccountRequest: shared.ForwardBankAccountRequest$.Outbound;
        bankAccountId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ForwardBankAccountRequest> = z
        .object({
            forwardBankAccountRequest: shared.ForwardBankAccountRequest$.outboundSchema,
            bankAccountId: z.string(),
        })
        .transform((v) => {
            return {
                ForwardBankAccountRequest: v.forwardBankAccountRequest,
                bankAccountId: v.bankAccountId,
            };
        });
}

/** @internal */
export namespace ForwardBankAccountResponse$ {
    export type Inbound = {
        BankAccountResponse?: shared.BankAccountResponse$.Inbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<ForwardBankAccountResponse, z.ZodTypeDef, Inbound> = z
        .object({
            BankAccountResponse: shared.BankAccountResponse$.inboundSchema.optional(),
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                ...(v.BankAccountResponse === undefined
                    ? null
                    : { bankAccountResponse: v.BankAccountResponse }),
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        BankAccountResponse?: shared.BankAccountResponse$.Outbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ForwardBankAccountResponse> = z
        .object({
            bankAccountResponse: shared.BankAccountResponse$.outboundSchema.optional(),
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ...(v.bankAccountResponse === undefined
                    ? null
                    : { BankAccountResponse: v.bankAccountResponse }),
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
