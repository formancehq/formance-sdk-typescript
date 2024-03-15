/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import * as z from "zod";

export type ListBankAccountsRequest = {
    /**
     * Parameter used in pagination requests. Maximum page size is set to 15.
     *
     * @remarks
     * Set to the value of next for the next page of results.
     * Set to the value of previous for the previous page of results.
     * No other parameters can be set when this parameter is set.
     *
     */
    cursor?: string | undefined;
    /**
     * The maximum number of results to return per page.
     *
     * @remarks
     *
     */
    pageSize?: number | undefined;
    /**
     * Fields used to sort payments (default is date:desc).
     */
    sort?: Array<string> | undefined;
};

export type ListBankAccountsResponse = {
    /**
     * OK
     */
    bankAccountsCursor?: shared.BankAccountsCursor | undefined;
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
export namespace ListBankAccountsRequest$ {
    export type Inbound = {
        cursor?: string | undefined;
        pageSize?: number | undefined;
        sort?: Array<string> | undefined;
    };

    export const inboundSchema: z.ZodType<ListBankAccountsRequest, z.ZodTypeDef, Inbound> = z
        .object({
            cursor: z.string().optional(),
            pageSize: z.number().int().default(15),
            sort: z.array(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.cursor === undefined ? null : { cursor: v.cursor }),
                pageSize: v.pageSize,
                ...(v.sort === undefined ? null : { sort: v.sort }),
            };
        });

    export type Outbound = {
        cursor?: string | undefined;
        pageSize: number;
        sort?: Array<string> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListBankAccountsRequest> = z
        .object({
            cursor: z.string().optional(),
            pageSize: z.number().int().default(15),
            sort: z.array(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.cursor === undefined ? null : { cursor: v.cursor }),
                pageSize: v.pageSize,
                ...(v.sort === undefined ? null : { sort: v.sort }),
            };
        });
}

/** @internal */
export namespace ListBankAccountsResponse$ {
    export type Inbound = {
        BankAccountsCursor?: shared.BankAccountsCursor$.Inbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<ListBankAccountsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            BankAccountsCursor: shared.BankAccountsCursor$.inboundSchema.optional(),
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                ...(v.BankAccountsCursor === undefined
                    ? null
                    : { bankAccountsCursor: v.BankAccountsCursor }),
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        BankAccountsCursor?: shared.BankAccountsCursor$.Outbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListBankAccountsResponse> = z
        .object({
            bankAccountsCursor: shared.BankAccountsCursor$.outboundSchema.optional(),
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ...(v.bankAccountsCursor === undefined
                    ? null
                    : { BankAccountsCursor: v.bankAccountsCursor }),
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
