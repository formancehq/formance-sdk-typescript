# V2WorkflowInstanceHistory

## Example Usage

```typescript
import { V2WorkflowInstanceHistory } from "@formance/formance-sdk/sdk/models/shared";

let value: V2WorkflowInstanceHistory = {
  input: {
    event: "<value>",
  },
  name: "<value>",
  startedAt: new Date("2024-08-13T11:27:07.282Z"),
  terminated: false,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `error`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `input`                                                                                       | *shared.V2Stage*                                                                              | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `startedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `terminated`                                                                                  | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `terminatedAt`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |