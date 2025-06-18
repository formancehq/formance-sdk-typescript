<!-- Start SDK Example Usage [usage] -->
```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await sdk.getVersions();

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->