/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type Key = {
    dataType: string;
    required: boolean;
};

export type ConnectorsConfigsResponseConnector = {
    key: Key;
};

export type ConnectorsConfigsResponseData = {
    connector: ConnectorsConfigsResponseConnector;
};

export type ConnectorsConfigsResponse = {
    data: ConnectorsConfigsResponseData;
};

/** @internal */
export namespace Key$ {
    export type Inbound = {
        dataType: string;
        required: boolean;
    };

    export const inboundSchema: z.ZodType<Key, z.ZodTypeDef, Inbound> = z
        .object({
            dataType: z.string(),
            required: z.boolean(),
        })
        .transform((v) => {
            return {
                dataType: v.dataType,
                required: v.required,
            };
        });

    export type Outbound = {
        dataType: string;
        required: boolean;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Key> = z
        .object({
            dataType: z.string(),
            required: z.boolean(),
        })
        .transform((v) => {
            return {
                dataType: v.dataType,
                required: v.required,
            };
        });
}

/** @internal */
export namespace ConnectorsConfigsResponseConnector$ {
    export type Inbound = {
        key: Key$.Inbound;
    };

    export const inboundSchema: z.ZodType<
        ConnectorsConfigsResponseConnector,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            key: z.lazy(() => Key$.inboundSchema),
        })
        .transform((v) => {
            return {
                key: v.key,
            };
        });

    export type Outbound = {
        key: Key$.Outbound;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ConnectorsConfigsResponseConnector
    > = z
        .object({
            key: z.lazy(() => Key$.outboundSchema),
        })
        .transform((v) => {
            return {
                key: v.key,
            };
        });
}

/** @internal */
export namespace ConnectorsConfigsResponseData$ {
    export type Inbound = {
        connector: ConnectorsConfigsResponseConnector$.Inbound;
    };

    export const inboundSchema: z.ZodType<ConnectorsConfigsResponseData, z.ZodTypeDef, Inbound> = z
        .object({
            connector: z.lazy(() => ConnectorsConfigsResponseConnector$.inboundSchema),
        })
        .transform((v) => {
            return {
                connector: v.connector,
            };
        });

    export type Outbound = {
        connector: ConnectorsConfigsResponseConnector$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ConnectorsConfigsResponseData> =
        z
            .object({
                connector: z.lazy(() => ConnectorsConfigsResponseConnector$.outboundSchema),
            })
            .transform((v) => {
                return {
                    connector: v.connector,
                };
            });
}

/** @internal */
export namespace ConnectorsConfigsResponse$ {
    export type Inbound = {
        data: ConnectorsConfigsResponseData$.Inbound;
    };

    export const inboundSchema: z.ZodType<ConnectorsConfigsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            data: z.lazy(() => ConnectorsConfigsResponseData$.inboundSchema),
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });

    export type Outbound = {
        data: ConnectorsConfigsResponseData$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ConnectorsConfigsResponse> = z
        .object({
            data: z.lazy(() => ConnectorsConfigsResponseData$.outboundSchema),
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });
}
