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
          balance: BigInt("468651"),
          createdAt: new Date("2023-07-13T13:09:34.110Z"),
          currency: "Lesotho Loti",
          lastUpdatedAt: new Date("2022-03-03T01:31:09.417Z"),
        },
      ],
      hasMore: false,
      next: "",
      pageSize: 15,
      previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
    },
  },
  contentType: "<value>",
  statusCode: 604846,
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