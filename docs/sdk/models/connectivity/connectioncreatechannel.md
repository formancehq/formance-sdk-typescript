# ConnectionCreateChannel

Maturity channel the service resolves to an exact release. Exactly
one of `version` and `channel`. The last applied release is reported in `status.appliedVersion`.


## Example Usage

```typescript
import { ConnectionCreateChannel } from "@formance/formance-sdk/sdk/models/connectivity";

let value: ConnectionCreateChannel = "rc";
```

## Values

```typescript
"stable" | "rc" | "beta" | "alpha"
```