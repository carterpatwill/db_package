# db_package

## Workflow

1. [Navigate to db_package](#1-navigate-to-db_package)
2. [Edit the schema](#2-edit-the-schema)
3. [Run a dev migration](#3-run-a-dev-migration)
4. [Commit your changes](#4-commit-your-changes)
5. [Bump the version](#5-bump-the-version)
6. [Push to GitHub](#6-push-to-github)
7. [Deploy migration to prod](#7-deploy-migration-to-prod)
8. [Publish the package](#8-publish-the-package)
9. [Update apps](#9-update-apps)

---

## 1. Navigate to db_package

```bash
cd /Users/carterwilliams/Coding/GCL/hq_Rockies/db_package
```

---

## 2. Edit the schema

Open `prisma/schema.prisma` and make your changes — add a model, add a column, etc.

---

## 3. Run a dev migration

Applies your schema change to the dev database and generates a new migration file.

```bash
npm run migrate:dev
```

You'll be prompted to name the migration. Keep it short and descriptive (e.g. `add_weight_column`).

---

## 4. Commit your changes

Stage the schema and migration files, then commit.

```bash
git add prisma/ && git commit -m "your message"
```

---

## 5. Bump the version

Updates `package.json` and creates a git tag in one step. Requires a clean working directory.

```bash
npm version patch
# or `minor` / `major` depending on the size of the change
```

| Change type | When to use |
|---|---|
| `patch` | Small changes, adding a column |
| `minor` | New model or significant feature |
| `major` | Breaking change to the schema |

---

## 6. Push to GitHub

Push the commit and the version tag.

```bash
git push && git push --tags
```

---

## 7. Deploy migration to prod

Runs any pending migration files against the production database.

```bash
npm run migrate:deploy
```

> This is safe to run — it only applies migrations that haven't been run yet.

---

## 8. Publish the package

Builds the Prisma client and publishes the new version to GitHub Packages.

```bash
npm publish
```

---

## 9. Update apps

In each app that uses this package, install the latest version to get the updated client.

```bash
npm install @carterpatwill/db@latest
```

---

## Seeding

Seeding populates the database with baseline data (e.g. the Rockies roster). It is a manual, one-time step — not run automatically on deploy.

**Run the seed:**
```bash
SEED_ALLOWED=true npx prisma db seed
```

**When to seed:**
- Initial setup of a new or reset database
- After a teammate clones the repo and sets up their local db
- When new baseline data needs to be added

> Never set `SEED_ALLOWED=true` in prod environment variables.
