# StageSendDestinationPaymentType

Type of transfer initiation:
- TRANSFER: Internal to internal account transfer
- PAYOUT: Internal to external account payout


## Example Usage

```typescript
import { StageSendDestinationPaymentType } from "@formance/formance-sdk/sdk/models/orchestration";

let value: StageSendDestinationPaymentType =
  StageSendDestinationPaymentType.Payout;
```

## Values

| Name       | Value      |
| ---------- | ---------- |
| `Transfer` | TRANSFER   |
| `Payout`   | PAYOUT     |