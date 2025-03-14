# GetAccountResponse

## Example Usage

```typescript
import { GetAccountResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: GetAccountResponse = {
  accountResponse: {
    data: {
      address: "users:001",
      balances: {
        "COIN": BigInt("100"),
      },
      metadata: {
        "admin": true,
        "a": {
          "nested": {
            "key": "value",
          },
        },
      },
      type: "virtual",
      volumes: {
        "USD": {
          balance: BigInt("90"),
          input: BigInt("100"),
          output: BigInt("10"),
        },
        "EUR": {
          balance: BigInt("90"),
          input: BigInt("100"),
          output: BigInt("10"),
        },
      },
    },
  },
  contentType: "<value>",
  statusCode: 206,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `accountResponse`                                                       | [shared.AccountResponse](../../../sdk/models/shared/accountresponse.md) | :heavy_minus_sign:                                                      | OK                                                                      |
| `contentType`                                                           | *string*                                                                | :heavy_check_mark:                                                      | HTTP response content type for this operation                           |
| `statusCode`                                                            | *number*                                                                | :heavy_check_mark:                                                      | HTTP response status code for this operation                            |
| `rawResponse`                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)   | :heavy_check_mark:                                                      | Raw HTTP response; suitable for custom response parsing                 |