# Thunder Compute Enterprise Documentation

Documentation for installing, operating, and evaluating Thunder Compute Enterprise.

## Local development

Install the Mintlify CLI dependencies and start the documentation preview from this directory:

```bash
npm install
npx mintlify dev
```

The published documentation includes:

- Overview
- Glossary
- Server and client setup

Documentation images live in `/images` and are referenced from MDX with
root-absolute paths such as `/images/gpu-oversubscription.png`.
