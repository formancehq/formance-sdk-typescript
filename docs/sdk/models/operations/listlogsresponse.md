# ListLogsResponse

## Example Usage

```typescript
import { ListLogsResponse } from "@formance/formance-sdk/sdk/models/operations";
import { Type } from "@formance/formance-sdk/sdk/models/shared";

let value: ListLogsResponse = {
  contentType: "<value>",
  logsCursorResponse: {
    cursor: {
      data: [
        {
          data: {
            "key": "<value>",
          },
          date: new Date("2025-08-09T11:11:16.127Z"),
          hash:
            "9ee060170400f556b7e1575cb13f9db004f150a08355c7431c62bc639166431e",
          id: 1234,
          type: Type.NewTransaction,
        },
      ],
      hasMore: false,
      next: "",
      pageSize: 15,
      previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
    },
  },
  statusCode: 403,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `contentType`                                                                 | *string*                                                                      | :heavy_check_mark:                                                            | HTTP response content type for this operation                                 |
| `logsCursorResponse`                                                          | [shared.LogsCursorResponse](../../../sdk/models/shared/logscursorresponse.md) | :heavy_minus_sign:                                                            | OK                                                                            |
| `statusCode`                                                                  | *number*                                                                      | :heavy_check_mark:                                                            | HTTP response status code for this operation                                  |
| `rawResponse`                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)         | :heavy_check_mark:                                                            | Raw HTTP response; suitable for custom response parsing                       |