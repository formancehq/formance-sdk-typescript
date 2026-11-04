# StageDelay

## Example Usage

```typescript
import { StageDelay } from "@formance/formance-sdk/sdk/models/orchestration";

let value: StageDelay = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `duration`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Wait for this long, expressed as a Go duration such as 10s. Mutually exclusive with until     |
| `until`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Wait until this absolute point in time. Mutually exclusive with duration                      |