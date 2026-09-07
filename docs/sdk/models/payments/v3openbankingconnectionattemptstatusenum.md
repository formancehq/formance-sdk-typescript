# V3OpenBankingConnectionAttemptStatusEnum

Where a link attempt stands, from pending through to completed on success or exited when the user abandoned the flow or the provider reported an error

## Example Usage

```typescript
import { V3OpenBankingConnectionAttemptStatusEnum } from "@formance/formance-sdk/sdk/models/payments";

let value: V3OpenBankingConnectionAttemptStatusEnum = "exited";
```

## Values

```typescript
"pending" | "completed" | "exited"
```