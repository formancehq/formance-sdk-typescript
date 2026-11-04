# TemporalStats

## Example Usage

```typescript
import { TemporalStats } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: TemporalStats = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `firstSeen`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `lastSeen`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `peakHours`                                                                                   | [ledgerV3.HourBucket](../../../sdk/models/ledgerV3/hourbucket.md)[]                           | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `transactionsPerDay`                                                                          | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |