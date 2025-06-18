# V2LogsCursorResponseCursor

## Example Usage

```typescript
import { V2LogsCursorResponseCursor, V2LogType } from "@formance/formance-sdk/sdk/models/shared";

let value: V2LogsCursorResponseCursor = {
  data: [
    {
      data: {
        "key": "<value>",
        "key1": "<value>",
      },
      date: new Date("2023-11-27T21:30:42.821Z"),
      hash: "9ee060170400f556b7e1575cb13f9db004f150a08355c7431c62bc639166431e",
      id: 1234n,
      type: V2LogType.SetMetadata,
    },
  ],
  hasMore: false,
  next: "",
  pageSize: 15,
  previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           | Example                                               |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `data`                                                | [shared.V2Log](../../../sdk/models/shared/v2log.md)[] | :heavy_check_mark:                                    | N/A                                                   |                                                       |
| `hasMore`                                             | *boolean*                                             | :heavy_check_mark:                                    | N/A                                                   | false                                                 |
| `next`                                                | *string*                                              | :heavy_minus_sign:                                    | N/A                                                   |                                                       |
| `pageSize`                                            | *number*                                              | :heavy_check_mark:                                    | N/A                                                   | 15                                                    |
| `previous`                                            | *string*                                              | :heavy_minus_sign:                                    | N/A                                                   | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=          |