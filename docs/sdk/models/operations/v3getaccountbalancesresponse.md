# V3GetAccountBalancesResponse

## Example Usage

```typescript
import { V3GetAccountBalancesResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: V3GetAccountBalancesResponse = {
  contentType: "<value>",
  statusCode: 100,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  v3BalancesCursorResponse: {
    cursor: {
      data: [
        {
          accountID: "<id>",
          asset: "<value>",
          balance: BigInt("46806"),
          createdAt: new Date("2025-11-29T22:07:11.535Z"),
          lastUpdatedAt: new Date("2023-01-05T05:32:33.670Z"),
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