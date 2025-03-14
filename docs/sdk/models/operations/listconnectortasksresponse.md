# ListConnectorTasksResponse

## Example Usage

```typescript
import { ListConnectorTasksResponse } from "@formance/formance-sdk/sdk/models/operations";
import { TaskStatus } from "@formance/formance-sdk/sdk/models/shared";

let value: ListConnectorTasksResponse = {
  contentType: "<value>",
  statusCode: 409,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  tasksCursor: {
    cursor: {
      data: [
        {
          connectorID: "<id>",
          createdAt: new Date("2025-08-03T02:25:37.402Z"),
          descriptor: {},
          id: "04715ba9-b35a-4e84-a0b0-58e160594319",
          status: TaskStatus.Terminated,
          updatedAt: new Date("2025-11-05T22:50:25.041Z"),
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