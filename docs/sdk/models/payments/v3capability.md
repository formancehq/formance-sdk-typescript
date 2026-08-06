# V3Capability

Plugin capability advertised by a connector. Distinct from the Formance gateway "module capabilities" (which are version-gated); these reflect what the underlying PSP integration actually exposes.


## Example Usage

```typescript
import { V3Capability } from "@formance/formance-sdk/sdk/models/payments";

let value: V3Capability = "TRANSLATE_WEBHOOKS";
```

## Values

```typescript
"FETCH_ACCOUNTS" | "FETCH_BALANCES" | "FETCH_EXTERNAL_ACCOUNTS" | "FETCH_PAYMENTS" | "FETCH_OTHERS" | "FETCH_ORDERS" | "FETCH_CONVERSIONS" | "CREATE_WEBHOOKS" | "TRANSLATE_WEBHOOKS" | "CREATE_BANK_ACCOUNT" | "CREATE_TRANSFER" | "CREATE_PAYOUT" | "ALLOW_FORMANCE_ACCOUNT_CREATION" | "ALLOW_FORMANCE_PAYMENT_CREATION"
```