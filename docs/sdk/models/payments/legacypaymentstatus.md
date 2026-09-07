# LegacyPaymentStatus

Status of a payment as reported by the legacy payments API

## Example Usage

```typescript
import { LegacyPaymentStatus } from "@formance/formance-sdk/sdk/models/payments";

let value: LegacyPaymentStatus = "PROCESSED";
```

## Values

```typescript
"PENDING" | "SUCCEEDED" | "CANCELLED" | "FAILED" | "EXPIRED" | "REFUNDED" | "REFUNDED_FAILURE" | "DISPUTE" | "DISPUTE_WON" | "DISPUTE_LOST" | "OTHER" | "WAITING_FOR_VALIDATION" | "PROCESSING" | "PROCESSED" | "REJECTED" | "VALIDATED" | "ASK_RETRIED" | "ASK_REVERSED" | "REVERSE_PROCESSING" | "REVERSE_FAILED" | "PARTIALLY_REVERSED" | "REVERSED"
```