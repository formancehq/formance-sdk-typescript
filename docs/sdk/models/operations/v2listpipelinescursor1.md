# V2ListPipelinesCursor1

## Example Usage

```typescript
import { V2ListPipelinesCursor1 } from "@formance/formance-sdk/sdk/models/operations";

let value: V2ListPipelinesCursor1 = {
  cursor: {
    data: [
      {
        createdAt: new Date("2024-07-13T16:04:01.498Z"),
        exporterID: "<id>",
        id: "<id>",
        ledger: "<value>",
      },
    ],
    hasMore: false,
    next: "",
    pageSize: 15,
    previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `cursor`                                                                                      | [operations.V2ListPipelinesCursor2](../../../sdk/models/operations/v2listpipelinescursor2.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `data`                                                                                        | [shared.V2Pipeline](../../../sdk/models/shared/v2pipeline.md)[]                               | :heavy_minus_sign:                                                                            | N/A                                                                                           |