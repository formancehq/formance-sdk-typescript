# ListConnectorTasksV1Response

## Example Usage

```typescript
import { ListConnectorTasksV1Response } from "@formance/formance-sdk/sdk/models/operations";
import { PaymentStatus } from "@formance/formance-sdk/sdk/models/shared";

let value: ListConnectorTasksV1Response = {
  contentType: "<value>",
  statusCode: 230742,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  tasksCursor: {
    cursor: {
      data: [
        {
          connectorID: "<value>",
          createdAt: new Date("2024-04-18T08:14:14.290Z"),
          descriptor: {
            account: "39771354",
            name: "<value>",
          },
          id: "053202c7-3d5f-4e9b-90c2-8909b3fe49a8",
          state: {},
          status: PaymentStatus.DisputeLost,
          updatedAt: new Date("2023-10-09T12:59:31.397Z"),
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