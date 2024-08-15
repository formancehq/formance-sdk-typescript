# CreateWorkflowRequest

## Example Usage

```typescript
import { CreateWorkflowRequest } from "@formance/formance-sdk/sdk/models/shared";

let value: CreateWorkflowRequest = {
    stages: [
        {
            key: "<value>",
        },
    ],
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `name`                  | *string*                | :heavy_minus_sign:      | N/A                     |
| `stages`                | Record<string, *any*>[] | :heavy_check_mark:      | N/A                     |