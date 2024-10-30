# V2ListWorkflowsResponseCursor

## Example Usage

```typescript
import { V2ListWorkflowsResponseCursor } from "@formance/formance-sdk/sdk/models/shared";

let value: V2ListWorkflowsResponseCursor = {
  data: [
    {
      config: {
        stages: [
          {
            "key": "<value>",
          },
        ],
      },
      createdAt: new Date("2022-01-27T23:27:37.963Z"),
      id: "<id>",
      updatedAt: new Date("2023-11-11T06:29:05.657Z"),
    },
  ],
  hasMore: false,
  next: "",
  pageSize: 15,
  previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     | Example                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `data`                                                          | [shared.V2Workflow](../../../sdk/models/shared/v2workflow.md)[] | :heavy_check_mark:                                              | N/A                                                             |                                                                 |
| `hasMore`                                                       | *boolean*                                                       | :heavy_check_mark:                                              | N/A                                                             | false                                                           |
| `next`                                                          | *string*                                                        | :heavy_minus_sign:                                              | N/A                                                             |                                                                 |
| `pageSize`                                                      | *number*                                                        | :heavy_check_mark:                                              | N/A                                                             | 15                                                              |
| `previous`                                                      | *string*                                                        | :heavy_minus_sign:                                              | N/A                                                             | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=                    |