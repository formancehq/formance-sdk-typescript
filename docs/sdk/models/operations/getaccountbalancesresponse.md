# GetAccountBalancesResponse

## Example Usage

```typescript
import { GetAccountBalancesResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: GetAccountBalancesResponse = {
  balancesCursor: {
    cursor: {
      data: [
        {
          accountId: "<value>",
          asset: "<value>",
          balance: BigInt("56848"),
          createdAt: new Date("2024-02-03T21:48:55.607Z"),
          currency: "Leone",
          lastUpdatedAt: new Date("2024-05-02T00:55:42.625Z"),
        },
      ],
      hasMore: false,
      next: "",
      pageSize: 15,
      previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
    },
  },
  contentType: "<value>",
  statusCode: 203,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `balancesCursor`                                                      | [shared.BalancesCursor](../../../sdk/models/shared/balancescursor.md) | :heavy_minus_sign:                                                    | OK                                                                    |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |