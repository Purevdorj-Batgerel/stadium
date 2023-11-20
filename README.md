# Project Stadium

This is my personal Design System project.

Project is utilizing monorepo structure using `turborepo` and `PNPM`'s workspace

## Project Structure

### `turbo`

The directory `turbo` contains `turborepo` related files, especially `turbo generators`

### `packages`

Main source code of the design systems are residing here (`Token`, `Theme`, `Icon`, `Button`, etc)

### `apps`

Contains `storybook` config, web and mobile apps.

## CLI commands

To start dev environment run:

```
turbo dev
```

To generate new module utilize `Turbo`'s generator tool

```
turbo gen
```
