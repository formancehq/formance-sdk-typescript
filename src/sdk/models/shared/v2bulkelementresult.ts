/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { V2Transaction, V2Transaction$ } from "./v2transaction";
import * as z from "zod";

export type V2BulkElementResultErrorSchemas = {
    errorCode: string;
    errorDescription: string;
    errorDetails?: string | undefined;
    responseType: string;
};

export type V2BulkElementResultDeleteMetadataSchemas = {
    responseType: string;
};

export type V2BulkElementResultRevertTransactionSchemas = {
    data: V2Transaction;
    responseType: string;
};

export type Schemas = {
    responseType: string;
};

export type V2BulkElementResultCreateTransactionSchemas = {
    data: V2Transaction;
    responseType: string;
};

export type V2BulkElementResult =
    | (Schemas & { responseType: "ADD_METADATA" })
    | (V2BulkElementResultDeleteMetadataSchemas & { responseType: "DELETE_METADATA" })
    | (V2BulkElementResultCreateTransactionSchemas & { responseType: "CREATE_TRANSACTION" })
    | (V2BulkElementResultRevertTransactionSchemas & { responseType: "REVERT_TRANSACTION" })
    | (V2BulkElementResultErrorSchemas & { responseType: "ERROR" });

/** @internal */
export namespace V2BulkElementResultErrorSchemas$ {
    export type Inbound = {
        errorCode: string;
        errorDescription: string;
        errorDetails?: string | undefined;
        responseType: string;
    };

    export const inboundSchema: z.ZodType<V2BulkElementResultErrorSchemas, z.ZodTypeDef, Inbound> =
        z
            .object({
                errorCode: z.string(),
                errorDescription: z.string(),
                errorDetails: z.string().optional(),
                responseType: z.string(),
            })
            .transform((v) => {
                return {
                    errorCode: v.errorCode,
                    errorDescription: v.errorDescription,
                    ...(v.errorDetails === undefined ? null : { errorDetails: v.errorDetails }),
                    responseType: v.responseType,
                };
            });

    export type Outbound = {
        errorCode: string;
        errorDescription: string;
        errorDetails?: string | undefined;
        responseType: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        V2BulkElementResultErrorSchemas
    > = z
        .object({
            errorCode: z.string(),
            errorDescription: z.string(),
            errorDetails: z.string().optional(),
            responseType: z.string(),
        })
        .transform((v) => {
            return {
                errorCode: v.errorCode,
                errorDescription: v.errorDescription,
                ...(v.errorDetails === undefined ? null : { errorDetails: v.errorDetails }),
                responseType: v.responseType,
            };
        });
}

/** @internal */
export namespace V2BulkElementResultDeleteMetadataSchemas$ {
    export type Inbound = {
        responseType: string;
    };

    export const inboundSchema: z.ZodType<
        V2BulkElementResultDeleteMetadataSchemas,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            responseType: z.string(),
        })
        .transform((v) => {
            return {
                responseType: v.responseType,
            };
        });

    export type Outbound = {
        responseType: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        V2BulkElementResultDeleteMetadataSchemas
    > = z
        .object({
            responseType: z.string(),
        })
        .transform((v) => {
            return {
                responseType: v.responseType,
            };
        });
}

/** @internal */
export namespace V2BulkElementResultRevertTransactionSchemas$ {
    export type Inbound = {
        data: V2Transaction$.Inbound;
        responseType: string;
    };

    export const inboundSchema: z.ZodType<
        V2BulkElementResultRevertTransactionSchemas,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            data: V2Transaction$.inboundSchema,
            responseType: z.string(),
        })
        .transform((v) => {
            return {
                data: v.data,
                responseType: v.responseType,
            };
        });

    export type Outbound = {
        data: V2Transaction$.Outbound;
        responseType: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        V2BulkElementResultRevertTransactionSchemas
    > = z
        .object({
            data: V2Transaction$.outboundSchema,
            responseType: z.string(),
        })
        .transform((v) => {
            return {
                data: v.data,
                responseType: v.responseType,
            };
        });
}

/** @internal */
export namespace Schemas$ {
    export type Inbound = {
        responseType: string;
    };

    export const inboundSchema: z.ZodType<Schemas, z.ZodTypeDef, Inbound> = z
        .object({
            responseType: z.string(),
        })
        .transform((v) => {
            return {
                responseType: v.responseType,
            };
        });

    export type Outbound = {
        responseType: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Schemas> = z
        .object({
            responseType: z.string(),
        })
        .transform((v) => {
            return {
                responseType: v.responseType,
            };
        });
}

/** @internal */
export namespace V2BulkElementResultCreateTransactionSchemas$ {
    export type Inbound = {
        data: V2Transaction$.Inbound;
        responseType: string;
    };

    export const inboundSchema: z.ZodType<
        V2BulkElementResultCreateTransactionSchemas,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            data: V2Transaction$.inboundSchema,
            responseType: z.string(),
        })
        .transform((v) => {
            return {
                data: v.data,
                responseType: v.responseType,
            };
        });

    export type Outbound = {
        data: V2Transaction$.Outbound;
        responseType: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        V2BulkElementResultCreateTransactionSchemas
    > = z
        .object({
            data: V2Transaction$.outboundSchema,
            responseType: z.string(),
        })
        .transform((v) => {
            return {
                data: v.data,
                responseType: v.responseType,
            };
        });
}

/** @internal */
export namespace V2BulkElementResult$ {
    export type Inbound =
        | (Schemas$.Inbound & { responseType: "ADD_METADATA" })
        | (V2BulkElementResultDeleteMetadataSchemas$.Inbound & { responseType: "DELETE_METADATA" })
        | (V2BulkElementResultCreateTransactionSchemas$.Inbound & {
              responseType: "CREATE_TRANSACTION";
          })
        | (V2BulkElementResultRevertTransactionSchemas$.Inbound & {
              responseType: "REVERT_TRANSACTION";
          })
        | (V2BulkElementResultErrorSchemas$.Inbound & { responseType: "ERROR" });

    export type Outbound =
        | (Schemas$.Outbound & { responseType: "ADD_METADATA" })
        | (V2BulkElementResultDeleteMetadataSchemas$.Outbound & { responseType: "DELETE_METADATA" })
        | (V2BulkElementResultCreateTransactionSchemas$.Outbound & {
              responseType: "CREATE_TRANSACTION";
          })
        | (V2BulkElementResultRevertTransactionSchemas$.Outbound & {
              responseType: "REVERT_TRANSACTION";
          })
        | (V2BulkElementResultErrorSchemas$.Outbound & { responseType: "ERROR" });
    export const inboundSchema: z.ZodType<V2BulkElementResult, z.ZodTypeDef, Inbound> = z.union([
        z
            .lazy(() => Schemas$.inboundSchema)
            .and(
                z
                    .object({ responseType: z.literal("ADD_METADATA") })
                    .transform((v) => ({ responseType: v.responseType }))
            ),
        z
            .lazy(() => V2BulkElementResultDeleteMetadataSchemas$.inboundSchema)
            .and(
                z
                    .object({ responseType: z.literal("DELETE_METADATA") })
                    .transform((v) => ({ responseType: v.responseType }))
            ),
        z
            .lazy(() => V2BulkElementResultCreateTransactionSchemas$.inboundSchema)
            .and(
                z
                    .object({ responseType: z.literal("CREATE_TRANSACTION") })
                    .transform((v) => ({ responseType: v.responseType }))
            ),
        z
            .lazy(() => V2BulkElementResultRevertTransactionSchemas$.inboundSchema)
            .and(
                z
                    .object({ responseType: z.literal("REVERT_TRANSACTION") })
                    .transform((v) => ({ responseType: v.responseType }))
            ),
        z
            .lazy(() => V2BulkElementResultErrorSchemas$.inboundSchema)
            .and(
                z
                    .object({ responseType: z.literal("ERROR") })
                    .transform((v) => ({ responseType: v.responseType }))
            ),
    ]);
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2BulkElementResult> = z.union([
        z
            .lazy(() => Schemas$.outboundSchema)
            .and(
                z
                    .object({ responseType: z.literal("ADD_METADATA") })
                    .transform((v) => ({ responseType: v.responseType }))
            ),
        z
            .lazy(() => V2BulkElementResultDeleteMetadataSchemas$.outboundSchema)
            .and(
                z
                    .object({ responseType: z.literal("DELETE_METADATA") })
                    .transform((v) => ({ responseType: v.responseType }))
            ),
        z
            .lazy(() => V2BulkElementResultCreateTransactionSchemas$.outboundSchema)
            .and(
                z
                    .object({ responseType: z.literal("CREATE_TRANSACTION") })
                    .transform((v) => ({ responseType: v.responseType }))
            ),
        z
            .lazy(() => V2BulkElementResultRevertTransactionSchemas$.outboundSchema)
            .and(
                z
                    .object({ responseType: z.literal("REVERT_TRANSACTION") })
                    .transform((v) => ({ responseType: v.responseType }))
            ),
        z
            .lazy(() => V2BulkElementResultErrorSchemas$.outboundSchema)
            .and(
                z
                    .object({ responseType: z.literal("ERROR") })
                    .transform((v) => ({ responseType: v.responseType }))
            ),
    ]);
}
