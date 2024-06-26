/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClientSecret, ClientSecret$ } from "./clientsecret";
import * as z from "zod";

export type Client = {
    description?: string | undefined;
    id: string;
    metadata?: { [k: string]: any } | undefined;
    name: string;
    postLogoutRedirectUris?: Array<string> | undefined;
    public?: boolean | undefined;
    redirectUris?: Array<string> | undefined;
    scopes?: Array<string> | undefined;
    secrets?: Array<ClientSecret> | undefined;
    trusted?: boolean | undefined;
};

/** @internal */
export namespace Client$ {
    export const inboundSchema: z.ZodType<Client, z.ZodTypeDef, unknown> = z.object({
        description: z.string().optional(),
        id: z.string(),
        metadata: z.record(z.any()).optional(),
        name: z.string(),
        postLogoutRedirectUris: z.array(z.string()).optional(),
        public: z.boolean().optional(),
        redirectUris: z.array(z.string()).optional(),
        scopes: z.array(z.string()).optional(),
        secrets: z.array(ClientSecret$.inboundSchema).optional(),
        trusted: z.boolean().optional(),
    });

    export type Outbound = {
        description?: string | undefined;
        id: string;
        metadata?: { [k: string]: any } | undefined;
        name: string;
        postLogoutRedirectUris?: Array<string> | undefined;
        public?: boolean | undefined;
        redirectUris?: Array<string> | undefined;
        scopes?: Array<string> | undefined;
        secrets?: Array<ClientSecret$.Outbound> | undefined;
        trusted?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Client> = z.object({
        description: z.string().optional(),
        id: z.string(),
        metadata: z.record(z.any()).optional(),
        name: z.string(),
        postLogoutRedirectUris: z.array(z.string()).optional(),
        public: z.boolean().optional(),
        redirectUris: z.array(z.string()).optional(),
        scopes: z.array(z.string()).optional(),
        secrets: z.array(ClientSecret$.outboundSchema).optional(),
        trusted: z.boolean().optional(),
    });
}
