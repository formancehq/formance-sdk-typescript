# Cadence

Reconciliation rhythm. Scopes each failing fingerprint into a period so a
March break and an April break are distinct, independently-closable cases.
`continuous` (default) is a single unbounded period (live monitoring).


## Example Usage

```typescript
import { Cadence } from "@formance/formance-sdk/sdk/models/reconciliation";

let value: Cadence = "daily";
```

## Values

```typescript
"continuous" | "daily" | "weekly" | "monthly"
```