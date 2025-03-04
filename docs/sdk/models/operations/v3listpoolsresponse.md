# V3ListPoolsResponse

## Example Usage

```typescript
import { V3ListPoolsResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: V3ListPoolsResponse = {
  contentType: "<value>",
  statusCode: 203,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  v3PoolsCursorResponse: {
    cursor: {
      data: [
        {
          createdAt: new Date("2024-05-04T18:39:05.975Z"),
          id: "<id>",
          name: "<value>",
          poolAccounts: [
            "<value>",
          ],
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

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `contentType`                                                                       | *string*                                                                            | :heavy_check_mark:                                                                  | HTTP response content type for this operation                                       |
| `statusCode`                                                                        | *number*                                                                            | :heavy_check_mark:                                                                  | HTTP response status code for this operation                                        |
| `rawResponse`                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)               | :heavy_check_mark:                                                                  | Raw HTTP response; suitable for custom response parsing                             |
| `v3PoolsCursorResponse`                                                             | [shared.V3PoolsCursorResponse](../../../sdk/models/shared/v3poolscursorresponse.md) | :heavy_minus_sign:                                                                  | OK                                                                                  |