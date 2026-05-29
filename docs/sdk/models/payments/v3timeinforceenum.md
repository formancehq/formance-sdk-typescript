# V3TimeInForceEnum

How long an order is valid on the exchange.
`GOOD_UNTIL_CANCELLED` — rests until explicitly cancelled.
`GOOD_UNTIL_DATE_TIME` — rests until `expiresAt`.
`IMMEDIATE_OR_CANCEL` — fill immediately, cancel any unfilled portion.
`FILL_OR_KILL` — fill fully and immediately, or cancel entirely.


## Example Usage

```typescript
import { V3TimeInForceEnum } from "@formance/formance-sdk/sdk/models/payments";

let value: V3TimeInForceEnum = V3TimeInForceEnum.FillOrKill;
```

## Values

| Name                 | Value                |
| -------------------- | -------------------- |
| `Unknown`            | UNKNOWN              |
| `GoodUntilCancelled` | GOOD_UNTIL_CANCELLED |
| `GoodUntilDateTime`  | GOOD_UNTIL_DATE_TIME |
| `ImmediateOrCancel`  | IMMEDIATE_OR_CANCEL  |
| `FillOrKill`         | FILL_OR_KILL         |