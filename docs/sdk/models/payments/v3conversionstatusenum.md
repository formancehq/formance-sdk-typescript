# V3ConversionStatusEnum

Lifecycle of a conversion.
`PENDING` — accepted by the PSP, not yet settled.
`COMPLETED` — settled, terminal.
`FAILED` — rejected or reverted, terminal. See `error`.


## Example Usage

```typescript
import { V3ConversionStatusEnum } from "@formance/formance-sdk/sdk/models/payments";

let value: V3ConversionStatusEnum = "FAILED";
```

## Values

```typescript
"UNKNOWN" | "PENDING" | "COMPLETED" | "FAILED"
```