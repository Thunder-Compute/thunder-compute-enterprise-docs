# Thunder Compute Enterprise Documentation

Documentation for installing, operating, and evaluating Thunder Compute Enterprise.

## Local development

Install the Mintlify CLI dependencies and start the documentation preview from this directory:

```bash
npm install
npx mintlify dev
```

The documentation includes:

- Overview
- Installation for Kubernetes and normal deployments
- Architecture and components
- Compatibility and performance considerations

Documentation images live in `/images` and are referenced from MDX with
root-absolute paths such as `/images/gpu-oversubscription.png`.
