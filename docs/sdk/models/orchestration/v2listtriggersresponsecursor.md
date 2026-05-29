# V2ListTriggersResponseCursor

## Example Usage

```typescript
import { V2ListTriggersResponseCursor } from "@formance/formance-sdk/sdk/models/orchestration";

let value: V2ListTriggersResponseCursor = {
  data: [
    {
      createdAt: new Date("2026-07-25T14:03:42.462Z"),
      event: "<value>",
      id: "<id>",
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

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           | Example                                                                               |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `data`                                                                                | [orchestration.V2TriggerData1](../../../sdk/models/orchestration/v2triggerdata1.md)[] | :heavy_check_mark:                                                                    | N/A                                                                                   |                                                                                       |
| `hasMore`                                                                             | *boolean*                                                                             | :heavy_check_mark:                                                                    | N/A                                                                                   | false                                                                                 |
| `next`                                                                                | *string*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   |                                                                                       |
| `pageSize`                                                                            | *number*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   | 15                                                                                    |
| `previous`                                                                            | *string*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=                                          |