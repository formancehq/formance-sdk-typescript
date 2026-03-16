<!-- Start SDK Example Usage [usage] -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.getVersions();

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->