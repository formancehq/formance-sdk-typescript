# AddAccountTypeRequestPersistence

How account volumes are stored.
NORMAL: fully persisted (default).
EPHEMERAL: persisted, purged when zero balance after commit.
TRANSIENT: never persisted, must be zero at end of batch.


## Example Usage

```typescript
import { AddAccountTypeRequestPersistence } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: AddAccountTypeRequestPersistence = "EPHEMERAL";
```

## Values

```typescript
"NORMAL" | "EPHEMERAL" | "TRANSIENT"
```