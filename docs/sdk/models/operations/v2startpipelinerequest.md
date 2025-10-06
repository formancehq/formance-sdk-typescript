# V2StartPipelineRequest

## Example Usage

```typescript
import { V2StartPipelineRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: V2StartPipelineRequest = {
  ledger: "ledger001",
  pipelineID: "<id>",
};
```

## Fields

| Field               | Type                | Required            | Description         | Example             |
| ------------------- | ------------------- | ------------------- | ------------------- | ------------------- |
| `ledger`            | *string*            | :heavy_check_mark:  | Name of the ledger. | ledger001           |
| `pipelineID`        | *string*            | :heavy_check_mark:  | The pipeline id     |                     |