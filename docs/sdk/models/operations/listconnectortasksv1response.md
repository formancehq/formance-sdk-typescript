# ListConnectorTasksV1Response

## Example Usage

```typescript
import { ListConnectorTasksV1Response } from "@formance/formance-sdk/sdk/models/operations";
import { PaymentStatus } from "@formance/formance-sdk/sdk/models/shared";

let value: ListConnectorTasksV1Response = {
  contentType: "<value>",
  statusCode: 421,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  tasksCursor: {
    cursor: {
      data: [
        {
          connectorID: "<id>",
          createdAt: new Date("2023-01-03T23:06:19.217Z"),
          descriptor: {},
          id: "a99f0bd8-5c17-48b1-8369-e92fd8e8edfe",
          state: {},
          status: PaymentStatus.Succeeded,
          updatedAt: new Date("2024-03-02T11:47:54.767Z"),
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