# V2ListRunsResponseCursor

## Example Usage

```typescript
import { V2ListRunsResponseCursor } from "@formance/formance-sdk/sdk/models/orchestration";

let value: V2ListRunsResponseCursor = {
  data: [],
  hasMore: false,
  next: "",
  pageSize: 15,
  previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `data`                                                                                        | [orchestration.V2WorkflowInstance](../../../sdk/models/orchestration/v2workflowinstance.md)[] | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `hasMore`                                                                                     | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           | false                                                                                         |
| `next`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `pageSize`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | 15                                                                                            |
| `previous`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=                                                  |