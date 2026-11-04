# V2ResumeActivityRequestBody

## Example Usage

```typescript
import { V2ResumeActivityRequestBody } from "@formance/formance-sdk/sdk/models/operations";

let value: V2ResumeActivityRequestBody = {
  pausedAt: new Date("2026-03-02T08:48:17.046Z"),
  temporalRunID: "<id>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `pausedAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_check_mark:                                                                             | Nonzero RFC3339 timestamp from the paused activity projection identifying the pause generation |
| `temporalRunID`                                                                                | *string*                                                                                       | :heavy_check_mark:                                                                             | Expected Temporal run id from the paused activity projection                                   |