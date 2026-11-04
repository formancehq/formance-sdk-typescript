# ConnectionConfigurationChannel

Maturity channel the service resolves to an exact release. Exactly
one of `version` and `channel`. The last applied release is reported in `status.appliedVersion`.


## Example Usage

```typescript
import { ConnectionConfigurationChannel } from "@formance/formance-sdk/sdk/models/connectivity";

let value: ConnectionConfigurationChannel = "rc";
```

## Values

```typescript
"stable" | "rc" | "beta" | "alpha"
```