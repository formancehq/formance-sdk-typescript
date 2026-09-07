# PaymentStatus

Where a payment stands in its lifecycle

## Example Usage

```typescript
import { PaymentStatus } from "@formance/formance-sdk/sdk/models/payments";

let value: PaymentStatus = "REFUNDED";
```

## Values

```typescript
"PENDING" | "SUCCEEDED" | "CANCELLED" | "FAILED" | "EXPIRED" | "REFUNDED" | "REFUNDED_FAILURE" | "DISPUTE" | "DISPUTE_WON" | "DISPUTE_LOST" | "OTHER"
```