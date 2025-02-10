# GetBalancesResponse

## Example Usage

```typescript
import { GetBalancesResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: GetBalancesResponse = {
  balancesCursorResponse: {
    cursor: {
      data: [
        {
          "account1": {
            "USD": 100,
            "EUR": 23,
          },
          "account2": {
            "CAD": 20,
            "JPY": 21,
          },
        },
      ],
      hasMore: false,
      next: "",
      pageSize: 15,
      previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
    },
  },
  contentType: "<value>",
  statusCode: 301,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `balancesCursorResponse`                                                              | [shared.BalancesCursorResponse](../../../sdk/models/shared/balancescursorresponse.md) | :heavy_minus_sign:                                                                    | OK                                                                                    |
| `contentType`                                                                         | *string*                                                                              | :heavy_check_mark:                                                                    | HTTP response content type for this operation                                         |
| `statusCode`                                                                          | *number*                                                                              | :heavy_check_mark:                                                                    | HTTP response status code for this operation                                          |
| `rawResponse`                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                 | :heavy_check_mark:                                                                    | Raw HTTP response; suitable for custom response parsing                               |