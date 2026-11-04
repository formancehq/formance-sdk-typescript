# CreatePreparedQueryRequestTarget

Target entity type. `LOGS` queries return log entries; the log-only filter fields (`logId`, `date`, `ledger`) are valid only when the target is `LOGS`.

## Example Usage

```typescript
import { CreatePreparedQueryRequestTarget } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: CreatePreparedQueryRequestTarget = "LOGS";
```

## Values

```typescript
"ACCOUNTS" | "TRANSACTIONS" | "LOGS"
```