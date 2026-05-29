# V2PipelinesCursorResponse

Pipelines list

## Example Usage

```typescript
import { V2PipelinesCursorResponse } from "@formance/formance-sdk/sdk/models/ledger";

let value: V2PipelinesCursorResponse = {
  cursor: {
    data: [
      {
        createdAt: new Date("2025-03-21T08:54:33.486Z"),
        exporterID: "<id>",
        id: "<id>",
        ledger: "<value>",
      },
    ],
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
| `cursor`                                                                                                | [ledger.V2PipelinesCursorResponseCursor](../../../sdk/models/ledger/v2pipelinescursorresponsecursor.md) | :heavy_check_mark:                                                                                      | N/A                                                                                                     |