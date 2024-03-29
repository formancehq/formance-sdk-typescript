/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type PaymentsgetAccountRequest = {
    /**
     * The account ID.
     */
    accountId: string;
};

export type PaymentsgetAccountResponse = {
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
    paymentsAccountResponse?: shared.PaymentsAccountResponse | undefined;
};

/** @internal */
export namespace PaymentsgetAccountRequest$ {
    export type Inbound = {
        accountId: string;
    };

    export const inboundSchema: z.ZodType<PaymentsgetAccountRequest, z.ZodTypeDef, Inbound> = z
        .object({
            accountId: z.string(),
        })
        .transform((v) => {
            return {
                accountId: v.accountId,
            };
        });

    export type Outbound = {
        accountId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PaymentsgetAccountRequest> = z
        .object({
            accountId: z.string(),
        })
        .transform((v) => {
            return {
                accountId: v.accountId,
            };
        });
}

/** @internal */
export namespace PaymentsgetAccountResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        paymentsAccountResponse?: shared.PaymentsAccountResponse$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<PaymentsgetAccountResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            paymentsAccountResponse: shared.PaymentsAccountResponse$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.paymentsAccountResponse === undefined
                    ? null
                    : { paymentsAccountResponse: v.paymentsAccountResponse }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        paymentsAccountResponse?: shared.PaymentsAccountResponse$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PaymentsgetAccountResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            paymentsAccountResponse: shared.PaymentsAccountResponse$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.paymentsAccountResponse === undefined
                    ? null
                    : { paymentsAccountResponse: v.paymentsAccountResponse }),
            };
        });
}
