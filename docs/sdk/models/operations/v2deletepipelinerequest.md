# V2DeletePipelineRequest

## Example Usage

```typescript
import { V2DeletePipelineRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: V2DeletePipelineRequest = {
  ledger: "ledger001",
  pipelineID: "<id>",
};
```

## Fields

| Field               | Type                | Required            | Description         | Example             |
| ------------------- | ------------------- | ------------------- | ------------------- | ------------------- |
| `ledger`            | *string*            | :heavy_check_mark:  | Name of the ledger. | ledger001           |
| `pipelineID`        | *string*            | :heavy_check_mark:  | The pipeline id     |                     |