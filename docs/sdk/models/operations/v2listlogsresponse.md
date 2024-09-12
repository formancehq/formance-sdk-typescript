# V2ListLogsResponse

## Example Usage

```typescript
import { V2ListLogsResponse } from "@formance/formance-sdk/sdk/models/operations";
import { V2LogType } from "@formance/formance-sdk/sdk/models/shared";

let value: V2ListLogsResponse = {
  contentType: "<value>",
  statusCode: 613064,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  v2LogsCursorResponse: {
    cursor: {
      data: [
        {
          data: {
            "key": "<value>",
          },
          date: new Date("2023-04-24T23:41:18.538Z"),
          hash:
            "9ee060170400f556b7e1575cb13f9db004f150a08355c7431c62bc639166431e",
          id: BigInt("1234"),
          type: V2LogType.RevertedTransaction,
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

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `contentType`                                                                     | *string*                                                                          | :heavy_check_mark:                                                                | HTTP response content type for this operation                                     |
| `statusCode`                                                                      | *number*                                                                          | :heavy_check_mark:                                                                | HTTP response status code for this operation                                      |
| `rawResponse`                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)             | :heavy_check_mark:                                                                | Raw HTTP response; suitable for custom response parsing                           |
| `v2LogsCursorResponse`                                                            | [shared.V2LogsCursorResponse](../../../sdk/models/shared/v2logscursorresponse.md) | :heavy_minus_sign:                                                                | OK                                                                                |