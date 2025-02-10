# V3ListAccountsResponse

## Example Usage

```typescript
import { V3ListAccountsResponse } from "@formance/formance-sdk/sdk/models/operations";
import { V3AccountTypeEnum } from "@formance/formance-sdk/sdk/models/shared";

let value: V3ListAccountsResponse = {
  contentType: "<value>",
  statusCode: 102,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  v3AccountsCursorResponse: {
    cursor: {
      data: [
        {
          connectorID: "<value>",
          createdAt: new Date("2023-09-28T05:26:01.481Z"),
          id: "<id>",
          provider: "<value>",
          raw: {},
          reference: "<value>",
          type: V3AccountTypeEnum.Internal,
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
| `v3AccountsCursorResponse`                                                                | [shared.V3AccountsCursorResponse](../../../sdk/models/shared/v3accountscursorresponse.md) | :heavy_minus_sign:                                                                        | OK                                                                                        |