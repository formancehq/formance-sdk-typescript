# Runtime

The numscript runtime used to execute the script. Uses "machine" by default, unless the "--experimental-numscript-interpreter" feature flag is passed.

## Example Usage

```typescript
import { Runtime } from "@formance/formance-sdk/sdk/models/ledger";

let value: Runtime = "machine";
```

## Values

```typescript
"experimental-interpreter" | "machine"
```