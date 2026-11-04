# V3PromoteLedgerResponse

## Example Usage

```typescript
import { V3PromoteLedgerResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: V3PromoteLedgerResponse = {
  contentType: "<value>",
  headers: {
    "key": [],
    "key1": [],
  },
  statusCode: 668886,
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `contentType`                                                                              | *string*                                                                                   | :heavy_check_mark:                                                                         | HTTP response content type for this operation                                              |
| `errorResponse`                                                                            | [ledgerV3.ErrorResponse](../../../sdk/models/ledgerV3/errorresponse.md)                    | :heavy_minus_sign:                                                                         | The request is invalid, or the ledger is not in mirror mode (`LEDGER_NOT_IN_MIRROR_MODE`). |
| `forbidden`                                                                                | *string*                                                                                   | :heavy_minus_sign:                                                                         | Insufficient permissions (missing required scope)                                          |
| `headers`                                                                                  | Record<string, *string*[]>                                                                 | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `promoteLedgerResponse`                                                                    | [ledgerV3.PromoteLedgerResponse](../../../sdk/models/ledgerV3/promoteledgerresponse.md)    | :heavy_minus_sign:                                                                         | Ledger promoted successfully                                                               |
| `statusCode`                                                                               | *number*                                                                                   | :heavy_check_mark:                                                                         | HTTP response status code for this operation                                               |
| `rawResponse`                                                                              | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                      | :heavy_check_mark:                                                                         | Raw HTTP response; suitable for custom response parsing                                    |
| `unauthorized`                                                                             | *string*                                                                                   | :heavy_minus_sign:                                                                         | Authentication required (missing or invalid JWT token)                                     |