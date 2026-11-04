# WorkflowInstanceHistory

## Example Usage

```typescript
import { WorkflowInstanceHistory } from "@formance/formance-sdk/sdk/models/orchestration";

let value: WorkflowInstanceHistory = {
  input: {},
  name: "<value>",
  startedAt: new Date("2024-12-03T11:55:31.478Z"),
  terminated: false,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `error`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | Why the stage failed, absent when it succeeded                                                |
| `input`                                                                                       | *orchestration.Stage*                                                                         | :heavy_check_mark:                                                                            | One step of a workflow, whose shape depends on the stage type                                 |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Name of the stage this history entry records                                                  |
| `startedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the stage started                                                                        |
| `terminated`                                                                                  | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the stage has finished                                                                |
| `terminatedAt`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | When the stage finished, absent while it is still running                                     |