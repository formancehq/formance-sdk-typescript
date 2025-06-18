# PaymentStatus

## Example Usage

```typescript
import { PaymentStatus } from "@formance/formance-sdk/sdk/models/shared";

let value: PaymentStatus = PaymentStatus.Refunded;
```

## Values

| Name              | Value             |
| ----------------- | ----------------- |
| `Pending`         | PENDING           |
| `Succeeded`       | SUCCEEDED         |
| `Cancelled`       | CANCELLED         |
| `Failed`          | FAILED            |
| `Expired`         | EXPIRED           |
| `Refunded`        | REFUNDED          |
| `RefundedFailure` | REFUNDED_FAILURE  |
| `Dispute`         | DISPUTE           |
| `DisputeWon`      | DISPUTE_WON       |
| `DisputeLost`     | DISPUTE_LOST      |
| `Other`           | OTHER             |