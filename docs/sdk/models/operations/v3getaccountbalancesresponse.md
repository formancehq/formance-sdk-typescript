# V3GetAccountBalancesResponse

## Example Usage

```typescript
import { V3GetAccountBalancesResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: V3GetAccountBalancesResponse = {
  contentType: "<value>",
  statusCode: 303,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  v3BalancesCursorResponse: {
    cursor: {
      data: [
        {
          accountID: "<id>",
          asset: "<value>",
          balance: BigInt("880679"),
          createdAt: new Date("2025-11-01T17:59:03.627Z"),
          lastUpdatedAt: new Date("2025-12-23T02:40:59.586Z"),
        },
      ],
      hasMore: false,
      next: "",
      pageSize: 15,
      previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
    },
  },
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `contentType`                                                                             | *string*                                                                                  | :heavy_check_mark:                                                                        | HTTP response content type for this operation                                             |
| `statusCode`                                                                              | *number*                                                                                  | :heavy_check_mark:                                                                        | HTTP response status code for this operation                                              |
| `rawResponse`                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                     | :heavy_check_mark:                                                                        | Raw HTTP response; suitable for custom response parsing                                   |
| `v3BalancesCursorResponse`                                                                | [shared.V3BalancesCursorResponse](../../../sdk/models/shared/v3balancescursorresponse.md) | :heavy_minus_sign:                                                                        | OK                                                                                        |