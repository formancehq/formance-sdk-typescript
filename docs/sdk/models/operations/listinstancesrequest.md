# ListInstancesRequest

## Example Usage

```typescript
import { ListInstancesRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: ListInstancesRequest = {
    running: true,
    workflowID: "xxx",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              | Example                  |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `running`                | *boolean*                | :heavy_minus_sign:       | Filter running instances | true                     |
| `workflowID`             | *string*                 | :heavy_minus_sign:       | A workflow id            | xxx                      |