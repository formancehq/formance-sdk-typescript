/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { WebhooksV1 } from "./webhooksv1.js";

export class Webhooks extends ClientSDK {
  private _v1?: WebhooksV1;
  get v1(): WebhooksV1 {
    return (this._v1 ??= new WebhooksV1(this._options));
  }
}
