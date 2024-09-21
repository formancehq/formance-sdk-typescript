# TransferInitiationStatus

## Example Usage

```typescript
import { TransferInitiationStatus } from "@formance/formance-sdk/sdk/models/shared";

let value: TransferInitiationStatus = TransferInitiationStatus.Reversed;
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `WaitingForValidation` | WAITING_FOR_VALIDATION |
| `Processing`           | PROCESSING             |
| `Processed`            | PROCESSED              |
| `Failed`               | FAILED                 |
| `Rejected`             | REJECTED               |
| `Validated`            | VALIDATED              |
| `AskRetried`           | ASK_RETRIED            |
| `AskReversed`          | ASK_REVERSED           |
| `ReverseProcessing`    | REVERSE_PROCESSING     |
| `ReverseFailed`        | REVERSE_FAILED         |
| `PartiallyReversed`    | PARTIALLY_REVERSED     |
| `Reversed`             | REVERSED               |