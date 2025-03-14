# ListConnectorTasksV1Response

## Example Usage

```typescript
import { ListConnectorTasksV1Response } from "@formance/formance-sdk/sdk/models/operations";
import { TaskStatus } from "@formance/formance-sdk/sdk/models/shared";

let value: ListConnectorTasksV1Response = {
  contentType: "<value>",
  statusCode: 417,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  tasksCursor: {
    cursor: {
      data: [
        {
          connectorID: "<id>",
          createdAt: new Date("2025-11-21T04:42:37.776Z"),
          descriptor: {},
          id: "0bd85c17-8b13-469e-992f-d8e8edfe026f",
          status: TaskStatus.Pending,
          updatedAt: new Date("2025-08-29T09:21:28.573Z"),
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