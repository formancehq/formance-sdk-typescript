# V3PaymentInitiationStatusEnum

Where a payment initiation stands in its lifecycle

## Example Usage

```typescript
import { V3PaymentInitiationStatusEnum } from "@formance/formance-sdk/sdk/models/payments";

let value: V3PaymentInitiationStatusEnum = "FAILED";
```

## Values

```typescript
"UNKNOWN" | "WAITING_FOR_VALIDATION" | "SCHEDULED_FOR_PROCESSING" | "PROCESSING" | "PROCESSED" | "FAILED" | "REJECTED" | "REVERSE_PROCESSING" | "REVERSE_FAILED" | "REVERSED"
```