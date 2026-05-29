# V2CreatePipelineResponse

Created ipeline

## Example Usage

```typescript
import { V2CreatePipelineResponse } from "@formance/formance-sdk/sdk/models/ledger";

let value: V2CreatePipelineResponse = {
  v2PipelineConfiguration: {
    createdAt: new Date("2024-07-09T05:28:22.197Z"),
    exporterID: "<id>",
    id: "<id>",
    ledger: "<value>",
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `v2PipelineConfiguration`                                                               | [ledger.V2PipelineConfiguration](../../../sdk/models/ledger/v2pipelineconfiguration.md) | :heavy_check_mark:                                                                      | N/A                                                                                     |