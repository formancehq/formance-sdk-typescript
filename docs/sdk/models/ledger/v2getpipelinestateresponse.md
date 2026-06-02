# V2GetPipelineStateResponse

Pipeline information

## Example Usage

```typescript
import { V2GetPipelineStateResponse } from "@formance/formance-sdk/sdk/models/ledger";

let value: V2GetPipelineStateResponse = {
  data: {
    createdAt: new Date("2024-07-09T05:28:22.197Z"),
    exporterID: "<id>",
    id: "<id>",
    ledger: "<value>",
  },
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `data`                                                        | [ledger.V2Pipeline](../../../sdk/models/ledger/v2pipeline.md) | :heavy_check_mark:                                            | N/A                                                           |