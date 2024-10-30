# V2ListAccountsResponse

## Example Usage

```typescript
import { V2ListAccountsResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: V2ListAccountsResponse = {
  contentType: "<value>",
  statusCode: 308,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  v2AccountsCursorResponse: {
    cursor: {
      data: [
        {
          address: "users:001",
          effectiveVolumes: {
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
          metadata: {
            "admin": "true",
          },
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
| `v2AccountsCursorResponse`                                                                | [shared.V2AccountsCursorResponse](../../../sdk/models/shared/v2accountscursorresponse.md) | :heavy_minus_sign:                                                                        | OK                                                                                        |