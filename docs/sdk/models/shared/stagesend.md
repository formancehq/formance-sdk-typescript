# StageSend

## Example Usage

```typescript
import { StageSend } from "@formance/formance-sdk/sdk/models/shared";

let value: StageSend = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `amount`                                                                                      | [shared.Monetary](../../../sdk/models/shared/monetary.md)                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `destination`                                                                                 | [shared.StageSendDestination](../../../sdk/models/shared/stagesenddestination.md)             | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | Record<string, *string*>                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `source`                                                                                      | [shared.StageSendSource](../../../sdk/models/shared/stagesendsource.md)                       | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |