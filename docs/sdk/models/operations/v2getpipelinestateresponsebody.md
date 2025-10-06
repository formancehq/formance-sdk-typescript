# V2GetPipelineStateResponseBody

Pipeline information

## Example Usage

```typescript
import { V2GetPipelineStateResponseBody } from "@formance/formance-sdk/sdk/models/operations";

let value: V2GetPipelineStateResponseBody = {
  data: {
    createdAt: new Date("2025-11-17T09:32:55.209Z"),
    exporterID: "<id>",
    id: "<id>",
    ledger: "<value>",
  },
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `data`                                                        | [shared.V2Pipeline](../../../sdk/models/shared/v2pipeline.md) | :heavy_check_mark:                                            | N/A                                                           |