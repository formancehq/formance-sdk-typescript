# RunWorkflowRequest

## Example Usage

```typescript
import { RunWorkflowRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: RunWorkflowRequest = {
    workflowID: "xxx",
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            | Example                                |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `requestBody`                          | Record<string, *string*>               | :heavy_minus_sign:                     | N/A                                    |                                        |
| `wait`                                 | *boolean*                              | :heavy_minus_sign:                     | Wait end of the workflow before return |                                        |
| `workflowID`                           | *string*                               | :heavy_check_mark:                     | The flow id                            | xxx                                    |