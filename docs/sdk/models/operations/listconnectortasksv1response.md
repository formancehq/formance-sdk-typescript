# ListConnectorTasksV1Response

## Example Usage

```typescript
import { ListConnectorTasksV1Response } from "@formance/formance-sdk/sdk/models/operations";
import { PaymentStatus } from "@formance/formance-sdk/sdk/models/shared";

let value: ListConnectorTasksV1Response = {
  contentType: "<value>",
  statusCode: 89603,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  tasksCursor: {
    cursor: {
      data: [
        {
          connectorID: "<value>",
          createdAt: new Date("2022-09-26T22:08:20.716Z"),
          descriptor: {},
          id: "68db4204-47ab-4462-ac0b-cc45945370c1",
          state: {},
          status: PaymentStatus.Failed,
          updatedAt: new Date("2023-09-25T23:41:23.014Z"),
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