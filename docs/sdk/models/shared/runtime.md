# Runtime

The numscript runtime used to execute the script. Uses "machine" by default, unless the "--experimental-numscript-interpreter" feature flag is passed.

## Example Usage

```typescript
import { Runtime } from "@formance/formance-sdk/sdk/models/shared";

let value: Runtime = Runtime.Machine;
```

## Values

| Name                      | Value                     |
| ------------------------- | ------------------------- |
| `ExperimentalInterpreter` | experimental-interpreter  |
| `Machine`                 | machine                   |