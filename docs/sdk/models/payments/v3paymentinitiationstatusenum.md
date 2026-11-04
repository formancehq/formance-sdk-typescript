# V3PaymentInitiationStatusEnum

Where a payment initiation stands in its lifecycle

## Example Usage

```typescript
import { V3PaymentInitiationStatusEnum } from "@formance/formance-sdk/sdk/models/payments";

let value: V3PaymentInitiationStatusEnum = "NOT_INITIATED";
```

## Values

```typescript
"UNKNOWN" | "WAITING_FOR_VALIDATION" | "SCHEDULED_FOR_PROCESSING" | "PROCESSING" | "PROCESSED" | "FAILED" | "NOT_INITIATED" | "REJECTED" | "REVERSE_PROCESSING" | "REVERSE_FAILED" | "REVERSED"
```