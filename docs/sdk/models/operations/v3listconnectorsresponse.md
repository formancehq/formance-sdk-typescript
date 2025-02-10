# V3ListConnectorsResponse

## Example Usage

```typescript
import { V3ListConnectorsResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: V3ListConnectorsResponse = {
  contentType: "<value>",
  statusCode: 507,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  v3ConnectorsCursorResponse: {
    cursor: {
      data: [
        {
          config: {},
          createdAt: new Date("2025-11-11T22:47:48.049Z"),
          id: "<id>",
          name: "<value>",
          provider: "<value>",
          reference: "<value>",
          scheduledForDeletion: false,
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

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `contentType`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | HTTP response content type for this operation                                                 |
| `statusCode`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | HTTP response status code for this operation                                                  |
| `rawResponse`                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                         | :heavy_check_mark:                                                                            | Raw HTTP response; suitable for custom response parsing                                       |
| `v3ConnectorsCursorResponse`                                                                  | [shared.V3ConnectorsCursorResponse](../../../sdk/models/shared/v3connectorscursorresponse.md) | :heavy_minus_sign:                                                                            | OK                                                                                            |