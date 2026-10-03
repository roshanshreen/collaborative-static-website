# collaborative-static-website

## Branching Model

This repository follows a simple branching model for structured collaboration and stable development.

- `main`: the production-ready branch. Only tested and approved work should be merged here.
- `develop`: the main integration branch for active development.
- `feature/*`: used for individual features or tasks. Each branch is created from `develop` and merged back into `develop` when complete.

### Recommended workflow

1. Create a new `feature/*` branch from `develop` for each task.
2. Work on the feature and commit regularly.
3. Open a pull request to merge the feature branch into `develop`.
4. Once the work is validated, merge the updates into `main` when ready for release.

This keeps the main branch stable while allowing parallel feature development in a controlled way.