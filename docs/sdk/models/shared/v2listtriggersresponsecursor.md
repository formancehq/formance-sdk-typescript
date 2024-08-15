# V2ListTriggersResponseCursor

## Example Usage

```typescript
import { V2ListTriggersResponseCursor } from "@formance/formance-sdk/sdk/models/shared";

let value: V2ListTriggersResponseCursor = {
    data: [
        {
            createdAt: new Date("2023-07-29T17:17:11.069Z"),
            event: "<value>",
            id: "<id>",
            workflowID: "<value>",
        },
    ],
    hasMore: false,
    next: "",
    pageSize: 15,
    previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `data`                                                        | [shared.V2Trigger](../../../sdk/models/shared/v2trigger.md)[] | :heavy_check_mark:                                            | N/A                                                           |                                                               |
| `hasMore`                                                     | *boolean*                                                     | :heavy_check_mark:                                            | N/A                                                           | false                                                         |
| `next`                                                        | *string*                                                      | :heavy_minus_sign:                                            | N/A                                                           |                                                               |
| `pageSize`                                                    | *number*                                                      | :heavy_check_mark:                                            | N/A                                                           | 15                                                            |
| `previous`                                                    | *string*                                                      | :heavy_minus_sign:                                            | N/A                                                           | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=                  |