# V2ListRunsResponseCursor

## Example Usage

```typescript
import { V2ListRunsResponseCursor } from "@formance/formance-sdk/sdk/models/shared";

let value: V2ListRunsResponseCursor = {
  data: [
    {
      createdAt: new Date("2023-11-15T18:13:16.525Z"),
      id: "<id>",
      terminated: false,
      updatedAt: new Date("2022-01-19T15:57:10.680Z"),
      workflowID: "<id>",
    },
  ],
  hasMore: false,
  next: "",
  pageSize: 15,
  previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `data`                                                                          | [shared.V2WorkflowInstance](../../../sdk/models/shared/v2workflowinstance.md)[] | :heavy_check_mark:                                                              | N/A                                                                             |                                                                                 |
| `hasMore`                                                                       | *boolean*                                                                       | :heavy_check_mark:                                                              | N/A                                                                             | false                                                                           |
| `next`                                                                          | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |                                                                                 |
| `pageSize`                                                                      | *number*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             | 15                                                                              |
| `previous`                                                                      | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=                                    |