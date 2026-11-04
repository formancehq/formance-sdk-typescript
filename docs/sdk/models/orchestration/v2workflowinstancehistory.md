# V2WorkflowInstanceHistory

## Example Usage

```typescript
import { V2WorkflowInstanceHistory } from "@formance/formance-sdk/sdk/models/orchestration";

let value: V2WorkflowInstanceHistory = {
  input: {
    event: "<value>",
  },
  name: "<value>",
  startedAt: new Date("2026-08-18T20:29:38.223Z"),
  terminated: true,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `error`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | Why the stage failed, absent when it succeeded                                                |
| `input`                                                                                       | *orchestration.V2Stage*                                                                       | :heavy_check_mark:                                                                            | One step of a workflow, whose shape depends on the stage type                                 |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Name of the stage this history entry records                                                  |
| `startedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the stage started                                                                        |
| `terminated`                                                                                  | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the stage has finished                                                                |
| `terminatedAt`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | When the stage finished, absent while it is still running                                     |