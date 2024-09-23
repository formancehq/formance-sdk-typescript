/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { getOIDCWellKnowns } from "../funcs/getOIDCWellKnowns.js";
import { getVersions } from "../funcs/getVersions.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { Auth } from "./auth.js";
import { Ledger } from "./ledger.js";
import * as operations from "./models/operations/index.js";
import { Orchestration } from "./orchestration.js";
import { Payments } from "./payments.js";
import { Reconciliation } from "./reconciliation.js";
import { Search } from "./search.js";
import { unwrapAsync } from "./types/fp.js";
import { Wallets } from "./wallets.js";
import { Webhooks } from "./webhooks.js";

export class SDK extends ClientSDK {
  private _auth?: Auth;
  get auth(): Auth {
    return (this._auth ??= new Auth(this._options));
  }

  private _ledger?: Ledger;
  get ledger(): Ledger {
    return (this._ledger ??= new Ledger(this._options));
  }

  private _orchestration?: Orchestration;
  get orchestration(): Orchestration {
    return (this._orchestration ??= new Orchestration(this._options));
  }

  private _payments?: Payments;
  get payments(): Payments {
    return (this._payments ??= new Payments(this._options));
  }

  private _reconciliation?: Reconciliation;
  get reconciliation(): Reconciliation {
    return (this._reconciliation ??= new Reconciliation(this._options));
  }

  private _search?: Search;
  get search(): Search {
    return (this._search ??= new Search(this._options));
  }

  private _wallets?: Wallets;
  get wallets(): Wallets {
    return (this._wallets ??= new Wallets(this._options));
  }

  private _webhooks?: Webhooks;
  get webhooks(): Webhooks {
    return (this._webhooks ??= new Webhooks(this._options));
  }

  /**
   * Retrieve OpenID connect well-knowns.
   */
  async getOIDCWellKnowns(
    options?: RequestOptions,
  ): Promise<operations.GetOIDCWellKnownsResponse> {
    return unwrapAsync(getOIDCWellKnowns(
      this,
      options,
    ));
  }

  /**
   * Show stack version information
   */
  async getVersions(
    options?: RequestOptions,
  ): Promise<operations.GetVersionsResponse> {
    return unwrapAsync(getVersions(
      this,
      options,
    ));
  }
}
