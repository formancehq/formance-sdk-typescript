# V2ExportersCursorResponseCursor

## Example Usage

```typescript
import { V2ExportersCursorResponseCursor } from "@formance/formance-sdk/sdk/models/ledger";

let value: V2ExportersCursorResponseCursor = {
  data: [
    {
      config: {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
      createdAt: new Date("2024-01-02T05:53:06.277Z"),
      driver: "<value>",
      id: "<id>",
    },
  ],
  hasMore: false,
  next: "aW0gdmVuaWFtLCBxdWlzIG5vc3RydWQ=",
  pageSize: 15,
  previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `data`                                                                                      | [ledger.V2ExporterConfiguration1](../../../sdk/models/ledger/v2exporterconfiguration1.md)[] | :heavy_check_mark:                                                                          | N/A                                                                                         |                                                                                             |
| `hasMore`                                                                                   | *boolean*                                                                                   | :heavy_check_mark:                                                                          | N/A                                                                                         | false                                                                                       |
| `next`                                                                                      | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         | aW0gdmVuaWFtLCBxdWlzIG5vc3RydWQ=                                                            |
| `pageSize`                                                                                  | *number*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         | 15                                                                                          |
| `previous`                                                                                  | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=                                                |