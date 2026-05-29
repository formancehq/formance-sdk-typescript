# V3OrderTypeEnum

Exchange order type. Determines which price fields are meaningful on
`V3Order`: LIMIT-family types use `limitPrice`; STOP-family types use
`stopPrice`; TWAP/VWAP are time-weighted execution algorithms.


## Example Usage

```typescript
import { V3OrderTypeEnum } from "@formance/formance-sdk/sdk/models/payments";

let value: V3OrderTypeEnum = V3OrderTypeEnum.Stop;
```

## Values

| Name                | Value               |
| ------------------- | ------------------- |
| `Unknown`           | UNKNOWN             |
| `Market`            | MARKET              |
| `Limit`             | LIMIT               |
| `StopLimit`         | STOP_LIMIT          |
| `Stop`              | STOP                |
| `Twap`              | TWAP                |
| `Vwap`              | VWAP                |
| `Peg`               | PEG                 |
| `Block`             | BLOCK               |
| `Rfq`               | RFQ                 |
| `TrailingStop`      | TRAILING_STOP       |
| `TrailingStopLimit` | TRAILING_STOP_LIMIT |
| `TakeProfit`        | TAKE_PROFIT         |
| `TakeProfitLimit`   | TAKE_PROFIT_LIMIT   |
| `LimitMaker`        | LIMIT_MAKER         |