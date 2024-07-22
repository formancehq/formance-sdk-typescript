/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { RequestInput } from "../lib/http.js";
import {
    AfterErrorContext,
    AfterErrorHook,
    AfterSuccessContext,
    AfterSuccessHook,
    BeforeRequestContext,
    BeforeRequestHook,
    BeforeCreateRequestHook,
    BeforeCreateRequestContext,
    Hooks,
    SDKInitHook,
    SDKInitOptions,
} from "./types.js";

import { initHooks } from "./registration.js";

export class SDKHooks implements Hooks {
    sdkInitHooks: SDKInitHook[] = [];
    beforeCreateRequestHooks: BeforeCreateRequestHook[] = [];
    beforeRequestHooks: BeforeRequestHook[] = [];
    afterSuccessHooks: AfterSuccessHook[] = [];
    afterErrorHooks: AfterErrorHook[] = [];

    constructor() {
        initHooks(this);
    }

    registerSDKInitHook(hook: SDKInitHook) {
        this.sdkInitHooks.push(hook);
    }

    registerBeforeCreateRequestHook(hook: BeforeCreateRequestHook) {
        this.beforeCreateRequestHooks.push(hook);
    }

    registerBeforeRequestHook(hook: BeforeRequestHook) {
        this.beforeRequestHooks.push(hook);
    }

    registerAfterSuccessHook(hook: AfterSuccessHook) {
        this.afterSuccessHooks.push(hook);
    }

    registerAfterErrorHook(hook: AfterErrorHook) {
        this.afterErrorHooks.push(hook);
    }

    sdkInit(opts: SDKInitOptions): SDKInitOptions {
        return this.sdkInitHooks.reduce((opts, hook) => hook.sdkInit(opts), opts);
    }

    beforeCreateRequest(hookCtx: BeforeCreateRequestContext, input: RequestInput): RequestInput {
        let inp = input;

        for (const hook of this.beforeCreateRequestHooks) {
            inp = hook.beforeCreateRequest(hookCtx, inp);
        }

        return inp;
    }

    async beforeRequest(hookCtx: BeforeRequestContext, request: Request): Promise<Request> {
        let req = request;

        for (const hook of this.beforeRequestHooks) {
            req = await hook.beforeRequest(hookCtx, req);
        }

        return req;
    }

    async afterSuccess(hookCtx: AfterSuccessContext, response: Response): Promise<Response> {
        let res = response;

        for (const hook of this.afterSuccessHooks) {
            res = await hook.afterSuccess(hookCtx, res);
        }

        return res;
    }

    async afterError(
        hookCtx: AfterErrorContext,
        response: Response | null,
        error: unknown
    ): Promise<{ response: Response | null; error: unknown }> {
        let res = response;
        let err = error;

        for (const hook of this.afterErrorHooks) {
            const result = await hook.afterError(hookCtx, res, err);
            res = result.response;
            err = result.error;
        }

        return { response: res, error: err };
    }
}
