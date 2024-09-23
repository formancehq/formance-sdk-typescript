/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { SDKWebhooksV1 } from "./sdkwebhooksv1.js";

export class Webhooks extends ClientSDK {
  private _v1?: SDKWebhooksV1;
  get v1(): SDKWebhooksV1 {
    return (this._v1 ??= new SDKWebhooksV1(this._options));
  }
}
