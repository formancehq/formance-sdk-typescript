# ListConnectorTasksResponse

## Example Usage

```typescript
import { ListConnectorTasksResponse } from "@formance/formance-sdk/sdk/models/operations";
import { PaymentStatus } from "@formance/formance-sdk/sdk/models/shared";

let value: ListConnectorTasksResponse = {
  contentType: "<value>",
  statusCode: 302,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  tasksCursor: {
    cursor: {
      data: [
        {
          connectorID: "<id>",
          createdAt: new Date("2024-07-29T08:49:21.047Z"),
          descriptor: {},
          id: "c5ed0471-5ba9-4b35-9ae8-40b058e16059",
          state: {},
          status: PaymentStatus.Cancelled,
          updatedAt: new Date("2023-05-07T19:27:28.258Z"),
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

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |
| `tasksCursor`                                                         | [shared.TasksCursor](../../../sdk/models/shared/taskscursor.md)       | :heavy_minus_sign:                                                    | OK                                                                    |