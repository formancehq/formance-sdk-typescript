# CreateTransferInitiationRequestType

Type of transfer initiation:
- TRANSFER: Internal to internal account transfer
- PAYOUT: Internal to external account payout


## Example Usage

```typescript
import { CreateTransferInitiationRequestType } from "@formance/formance-sdk/sdk/models/orchestration";

let value: CreateTransferInitiationRequestType = "PAYOUT";
```

## Values

```typescript
"TRANSFER" | "PAYOUT"
```