/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { searchSearch } from "../funcs/searchSearch.js";
import { searchSearchgetServerInfo } from "../funcs/searchSearchgetServerInfo.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Search extends ClientSDK {
  /**
   * Search
   *
   * @remarks
   * ElasticSearch query engine
   */
  async search(
    request: shared.Query,
    options?: RequestOptions,
  ): Promise<operations.SearchResponse> {
    return unwrapAsync(searchSearch(
      this,
      request,
      options,
    ));
  }

  /**
   * Get server info
   */
  async searchgetServerInfo(
    options?: RequestOptions,
  ): Promise<operations.SearchgetServerInfoResponse> {
    return unwrapAsync(searchSearchgetServerInfo(
      this,
      options,
    ));
  }
}
