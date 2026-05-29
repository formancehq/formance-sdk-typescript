# V3OrderStatusEnum

Lifecycle of an order on the exchange.
`PENDING` — accepted by the exchange, not yet working.
`OPEN` — live on the book, no fills yet.
`PARTIALLY_FILLED` — live on the book, some base quantity filled.
`FILLED` — fully filled, terminal.
`CANCELLED` — cancelled by the user or system, terminal.
`FAILED` — rejected by the exchange, terminal. See `error` for details.
`EXPIRED` — `timeInForce` elapsed before full fill, terminal.


## Example Usage

```typescript
import { V3OrderStatusEnum } from "@formance/formance-sdk/sdk/models/payments";

let value: V3OrderStatusEnum = V3OrderStatusEnum.Failed;
```

## Values

| Name              | Value             |
| ----------------- | ----------------- |
| `Unknown`         | UNKNOWN           |
| `Pending`         | PENDING           |
| `Open`            | OPEN              |
| `PartiallyFilled` | PARTIALLY_FILLED  |
| `Filled`          | FILLED            |
| `Cancelled`       | CANCELLED         |
| `Failed`          | FAILED            |
| `Expired`         | EXPIRED           |