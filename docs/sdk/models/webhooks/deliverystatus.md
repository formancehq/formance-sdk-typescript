# DeliveryStatus

Current state of a delivery in its retry lifecycle

## Example Usage

```typescript
import { DeliveryStatus } from "@formance/formance-sdk/sdk/models/webhooks";

let value: DeliveryStatus = "pending";
```

## Values

```typescript
"pending" | "delivering" | "succeeded" | "failed" | "cancelled"
```