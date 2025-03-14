# V3ListConnectorSchedulesResponse

## Example Usage

```typescript
import { V3ListConnectorSchedulesResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: V3ListConnectorSchedulesResponse = {
  contentType: "<value>",
  statusCode: 204,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  v3ConnectorSchedulesCursorResponse: {
    cursor: {
      data: [
        {
          connectorID: "<value>",
          createdAt: new Date("2024-06-25T09:04:00.715Z"),
          id: "<id>",
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

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                 | *string*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response content type for this operation                                                                 |
| `statusCode`                                                                                                  | *number*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response status code for this operation                                                                  |
| `rawResponse`                                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                         | :heavy_check_mark:                                                                                            | Raw HTTP response; suitable for custom response parsing                                                       |
| `v3ConnectorSchedulesCursorResponse`                                                                          | [shared.V3ConnectorSchedulesCursorResponse](../../../sdk/models/shared/v3connectorschedulescursorresponse.md) | :heavy_minus_sign:                                                                                            | OK                                                                                                            |