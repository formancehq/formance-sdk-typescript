# LegacyPaymentStatus

## Example Usage

```typescript
import { LegacyPaymentStatus } from "@formance/formance-sdk/sdk/models/shared";

let value: LegacyPaymentStatus = LegacyPaymentStatus.Processed;
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Pending`              | PENDING                |
| `Succeeded`            | SUCCEEDED              |
| `Cancelled`            | CANCELLED              |
| `Failed`               | FAILED                 |
| `Expired`              | EXPIRED                |
| `Refunded`             | REFUNDED               |
| `RefundedFailure`      | REFUNDED_FAILURE       |
| `Dispute`              | DISPUTE                |
| `DisputeWon`           | DISPUTE_WON            |
| `DisputeLost`          | DISPUTE_LOST           |
| `Other`                | OTHER                  |
| `WaitingForValidation` | WAITING_FOR_VALIDATION |
| `Processing`           | PROCESSING             |
| `Processed`            | PROCESSED              |
| `Rejected`             | REJECTED               |
| `Validated`            | VALIDATED              |
| `AskRetried`           | ASK_RETRIED            |
| `AskReversed`          | ASK_REVERSED           |
| `ReverseProcessing`    | REVERSE_PROCESSING     |
| `ReverseFailed`        | REVERSE_FAILED         |
| `PartiallyReversed`    | PARTIALLY_REVERSED     |
| `Reversed`             | REVERSED               |