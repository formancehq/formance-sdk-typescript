# V3OrderTypeEnum

Exchange order type. Determines which price fields are meaningful on
`V3Order`: LIMIT-family types use `limitPrice`; STOP-family types use
`stopPrice`; TWAP/VWAP are time-weighted execution algorithms.


## Example Usage

```typescript
import { V3OrderTypeEnum } from "@formance/formance-sdk/sdk/models/payments";

let value: V3OrderTypeEnum = "STOP";
```

## Values

```typescript
"UNKNOWN" | "MARKET" | "LIMIT" | "STOP_LIMIT" | "STOP" | "TWAP" | "VWAP" | "PEG" | "BLOCK" | "RFQ" | "TRAILING_STOP" | "TRAILING_STOP_LIMIT" | "TAKE_PROFIT" | "TAKE_PROFIT_LIMIT" | "LIMIT_MAKER"
```