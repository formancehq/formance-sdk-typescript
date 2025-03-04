# V3PaymentInitiationStatusEnum

## Example Usage

```typescript
import { V3PaymentInitiationStatusEnum } from "@formance/formance-sdk/sdk/models/shared";

let value: V3PaymentInitiationStatusEnum =
  V3PaymentInitiationStatusEnum.ReverseProcessing;
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Unknown`              | UNKNOWN                |
| `WaitingForValidation` | WAITING_FOR_VALIDATION |
| `Processing`           | PROCESSING             |
| `Processed`            | PROCESSED              |
| `Failed`               | FAILED                 |
| `Rejected`             | REJECTED               |
| `ReverseProcessing`    | REVERSE_PROCESSING     |
| `ReverseFailed`        | REVERSE_FAILED         |
| `Reversed`             | REVERSED               |