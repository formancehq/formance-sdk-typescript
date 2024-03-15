/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import * as z from "zod";

export type GetBankAccountRequest = {
    /**
     * The bank account ID.
     */
    bankAccountId: string;
};

export type GetBankAccountResponse = {
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
export namespace GetBankAccountRequest$ {
    export type Inbound = {
        bankAccountId: string;
    };

    export const inboundSchema: z.ZodType<GetBankAccountRequest, z.ZodTypeDef, Inbound> = z
        .object({
            bankAccountId: z.string(),
        })
        .transform((v) => {
            return {
                bankAccountId: v.bankAccountId,
            };
        });

    export type Outbound = {
        bankAccountId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetBankAccountRequest> = z
        .object({
            bankAccountId: z.string(),
        })
        .transform((v) => {
            return {
                bankAccountId: v.bankAccountId,
            };
        });
}

/** @internal */
export namespace GetBankAccountResponse$ {
    export type Inbound = {
        BankAccountResponse?: shared.BankAccountResponse$.Inbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<GetBankAccountResponse, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetBankAccountResponse> = z
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
