# V3PaymentStatusEnum

## Example Usage

```typescript
import { V3PaymentStatusEnum } from "@formance/formance-sdk/sdk/models/shared";

let value: V3PaymentStatusEnum = V3PaymentStatusEnum.Expired;
```

## Values

| Name                | Value               |
| ------------------- | ------------------- |
| `Unknown`           | UNKNOWN             |
| `Pending`           | PENDING             |
| `Succeeded`         | SUCCEEDED           |
| `Cancelled`         | CANCELLED           |
| `Failed`            | FAILED              |
| `Expired`           | EXPIRED             |
| `Refunded`          | REFUNDED            |
| `RefundedFailure`   | REFUNDED_FAILURE    |
| `RefundReversed`    | REFUND_REVERSED     |
| `Dispute`           | DISPUTE             |
| `DisputeWon`        | DISPUTE_WON         |
| `DisputeLost`       | DISPUTE_LOST        |
| `AmountAdjustement` | AMOUNT_ADJUSTEMENT  |
| `Authorisation`     | AUTHORISATION       |
| `Capture`           | CAPTURE             |
| `CaptureFailed`     | CAPTURE_FAILED      |
| `Other`             | OTHER               |