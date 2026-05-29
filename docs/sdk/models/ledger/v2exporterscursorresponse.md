# V2ExportersCursorResponse

Exporters list

## Example Usage

```typescript
import { V2ExportersCursorResponse } from "@formance/formance-sdk/sdk/models/ledger";

let value: V2ExportersCursorResponse = {
  cursor: {
    data: [],
    hasMore: false,
    next: "aW0gdmVuaWFtLCBxdWlzIG5vc3RydWQ=",
    pageSize: 15,
    previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
  },
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                | [ledger.V2ExportersCursorResponseCursor](../../../sdk/models/ledger/v2exporterscursorresponsecursor.md) | :heavy_check_mark:                                                                                      | N/A                                                                                                     |