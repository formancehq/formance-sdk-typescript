# CreateLedgerRequestMode

Ledger mode. MIRROR creates a read-only ledger that syncs from an external v2 source. Values are case-sensitive; any other value is rejected with 400 INVALID_REQUEST.

## Example Usage

```typescript
import { CreateLedgerRequestMode } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: CreateLedgerRequestMode = "MIRROR";
```

## Values

```typescript
"NORMAL" | "MIRROR"
```