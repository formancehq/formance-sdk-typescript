# V2LogsCursorResponseCursor

## Example Usage

```typescript
import { V2LogsCursorResponseCursor, V2LogType } from "@formance/formance-sdk/sdk/models/shared";

let value: V2LogsCursorResponseCursor = {
  data: [
    {
      data: {
        accountMetadata: {
          "users:001": {
            "created_by": "system",
          },
        },
        transaction: {
          id: 1234n,
          insertedAt: new Date("2024-01-15T10:30:00Z"),
          metadata: {},
          postings: [
            {
              amount: 100n,
              asset: "USD/2",
              destination: "users:001",
              source: "world",
            },
          ],
          reverted: false,
          timestamp: new Date("2024-01-15T10:30:00Z"),
        },
      },
      date: new Date("2025-08-06T09:47:07.312Z"),
      hash: "9ee060170400f556b7e1575cb13f9db004f150a08355c7431c62bc639166431e",
      id: 1234n,
      schemaVersion: "v1.0.0",
      type: V2LogType.SetMetadata,
    },
  ],
  hasMore: false,
  next: "aW0gdmVuaWFtLCBxdWlzIG5vc3RydWQ=",
  pageSize: 15,
  previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           | Example                                               |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `data`                                                | [shared.V2Log](../../../sdk/models/shared/v2log.md)[] | :heavy_check_mark:                                    | N/A                                                   |                                                       |
| `hasMore`                                             | *boolean*                                             | :heavy_check_mark:                                    | N/A                                                   | false                                                 |
| `next`                                                | *string*                                              | :heavy_minus_sign:                                    | N/A                                                   | aW0gdmVuaWFtLCBxdWlzIG5vc3RydWQ=                      |
| `pageSize`                                            | *number*                                              | :heavy_check_mark:                                    | N/A                                                   | 15                                                    |
| `previous`                                            | *string*                                              | :heavy_minus_sign:                                    | N/A                                                   | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=          |