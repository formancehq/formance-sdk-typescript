# V2CreateTransferInitiationRequestType

Type of transfer initiation:
- TRANSFER: Internal to internal account transfer
- PAYOUT: Internal to external account payout


## Example Usage

```typescript
import { V2CreateTransferInitiationRequestType } from "@formance/formance-sdk/sdk/models/orchestration";

let value: V2CreateTransferInitiationRequestType =
  V2CreateTransferInitiationRequestType.Payout;
```

## Values

| Name       | Value      |
| ---------- | ---------- |
| `Transfer` | TRANSFER   |
| `Payout`   | PAYOUT     |