# Trigger

## Example Usage

```typescript
import { Trigger } from "@formance/formance-sdk/sdk/models/shared";

let value: Trigger = {
  createdAt: new Date("2023-12-19T08:01:26.303Z"),
  event: "<value>",
  id: "<id>",
  workflowID: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `event`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `filter`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `vars`                                                                                        | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `workflowID`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |