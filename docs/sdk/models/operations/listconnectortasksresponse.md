# ListConnectorTasksResponse

## Example Usage

```typescript
import { ListConnectorTasksResponse } from "@formance/formance-sdk/sdk/models/operations";
import { PaymentStatus } from "@formance/formance-sdk/sdk/models/shared";

let value: ListConnectorTasksResponse = {
  contentType: "<value>",
  statusCode: 919483,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  tasksCursor: {
    cursor: {
      data: [
        {
          connectorID: "<value>",
          createdAt: new Date("2024-02-22T19:24:11.206Z"),
          descriptor: {},
          id: "7fd2ed02-8921-4cdd-8692-601fb576b0d5",
          state: {},
          status: PaymentStatus.Other,
          updatedAt: new Date("2022-01-19T05:22:55.590Z"),
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