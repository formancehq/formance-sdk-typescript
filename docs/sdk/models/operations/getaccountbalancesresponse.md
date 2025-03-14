# GetAccountBalancesResponse

## Example Usage

```typescript
import { GetAccountBalancesResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: GetAccountBalancesResponse = {
  balancesCursor: {
    cursor: {
      data: [
        {
          accountId: "<id>",
          asset: "<value>",
          balance: BigInt("454162"),
          createdAt: new Date("2023-12-25T01:32:23.978Z"),
          currency: "Danish Krone",
          lastUpdatedAt: new Date("2024-11-04T10:52:46.701Z"),
        },
      ],
      hasMore: false,
      next: "",
      pageSize: 15,
      previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
    },
  },
  contentType: "<value>",
  statusCode: 100,
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