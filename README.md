# Thunder Compute Enterprise Documentation

Documentation for installing, operating, and evaluating Thunder Compute Enterprise.

## Local development

Install the Mintlify CLI dependencies and start the documentation preview from this directory:

```bash
npm install
npx mintlify dev
```

## Structure

Navigation is defined in `docs.json`.

- **Getting Started** — `overview`, `requirements`, `nvidia-driver`
- **Installation** — `standalone`, **Kubernetes** (`kubernetes` as Basic setup, `kubevirt`), `sdk`
- **Advanced** — `architecture`, `kubernetes-internals`, `fault-tolerance`, `coming-soon`
- **Other** — `authentication`, `compatibility`, `glossary`

Documentation images live in `/images` and are referenced from MDX with
root-absolute paths such as `/images/gpu-oversubscription.png`.
