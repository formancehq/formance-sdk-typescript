# PreparedQueryTarget

Target entity type. `LOGS`, `ACCOUNTS` and `TRANSACTIONS` are all usable prepared-query targets (create, list/get and execute).

## Example Usage

```typescript
import { PreparedQueryTarget } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: PreparedQueryTarget = "ACCOUNTS";
```

## Values

```typescript
"ACCOUNTS" | "TRANSACTIONS" | "LOGS"
```