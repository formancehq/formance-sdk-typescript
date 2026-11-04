# ResumeActivityRequestBody

## Example Usage

```typescript
import { ResumeActivityRequestBody } from "@formance/formance-sdk/sdk/models/operations";

let value: ResumeActivityRequestBody = {
  pausedAt: new Date("2026-12-27T23:22:10.393Z"),
  temporalRunID: "<id>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `pausedAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_check_mark:                                                                             | Nonzero RFC3339 timestamp from the paused activity projection identifying the pause generation |
| `temporalRunID`                                                                                | *string*                                                                                       | :heavy_check_mark:                                                                             | Expected Temporal run id from the paused activity projection                                   |