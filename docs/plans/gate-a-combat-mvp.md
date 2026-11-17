# STRINGS Gate A combat MVP

## Goal

Build a fresh, desktop-first browser prototype of the GDD v1.0 Gate A combat loop in this folder. The source document is the design authority; tuning values are initial hypotheses, not validated balance.

## Scope and design

- Use Three.js for the first-person 3D prototype, TypeScript for game logic, and Vite for local development and production builds. These are new dependencies requiring review as part of this plan. Keep rendering, input, simulation, collision, encounter logic, and UI separated by responsibility.
- Create a flat, bounded courtyard with walkable cover and practice targets. Implement pointer-lock mouse look, normalized WASD movement, hold-to-sprint, one grounded jump, directional dash with cooldown and solid collision, and pause. Start from the GDD's movement tuning.
- Implement unlimited, automatic Light Bolt casting with projectile travel, swept collision against enemies and cover, and camera-aligned aiming that respects nearby cover. Pause firing during dash.
- Implement the Chaser and Spitter with distinct visible attack wind-ups, committed attacks, valid range and line-of-sight checks, recovery, damage grace, and readable hit feedback. Start from the GDD's provisional values.
- Implement a fixed six-enemy encounter in three pairs, at most two active at once, two limited +20 Lumina pickups, 100 starting Liwanag, victory and defeat screens, and clean retry. Stop simulation and clear pending attacks at results; pause on focus loss, clear held inputs, and require explicit resume.
- Provide a readable desktop HUD with health, dash readiness, crosshair, encounter progress, and threat feedback; include mouse sensitivity and camera-motion controls where applicable. Gate A contains no audio-dependent information.
- Generate a visual concept for the courtyard and game-ready raster artwork suitable for the prototype's interface or environment. Integrate generated assets where they support readability; use simple low-poly geometry for gameplay and preserve telegraph clarity. Do not represent invented visuals as verified Pangasinan cultural facts.
- Initialize a local Git repository when permissions permit; do not commit or configure a remote.

## Out of scope

Museum, Echo and Hibla guidance, artifacts and cultural entries, abilities including Light Mend, Guardian encounters, campaign saves, procedural routes, multiplayer, and mobile release readiness. Final art and audio are not required by Gate A.

## Validation and acceptance

- Inspect all project scripts and test setup for side effects before running checks; use no persistent datastore.
- Add focused tests for movement/collision, projectile and cover interactions, enemy attack validity, damage grace, encounter limits, and retry/reset where useful. Run the project's safe tests, type-check, and production build.
- Verify desktop controls, visible telegraphs, results, pause/focus loss, muted play, frame-rate behavior, and three consecutive retry cycles in an actual browser if browser use is authorized. Record browser and findings; distinguish automated checks from human feel and fairness judgments.
- Run at least ten scripted developer attempts and report evidence, failures, and tuning observations. Do not mark Gate A passed without the GDD's responsive, readable, fair, and reproducible playtest evidence.
- Review the final changes for accidental files, secrets, and unrelated work. Report remaining playtest limitations honestly.

## Checklist

- [x] Read the v1.0 design document and establish first-build scope with the user.
- [ ] Obtain review approval for this plan and its proposed dependencies.
- [ ] Initialize Git, subject to workspace permissions.
- [ ] Generate, inspect, and save the concept and in-game artwork.
- [ ] Scaffold the project and implement M1–M4.
- [ ] Perform safe automated checks and M5 developer verification.
- [ ] Review changes and report results and outstanding playtest gates.

## Current setup blocker

`git init` was attempted on 17 November 2026 and failed with `.git: Operation not permitted` under the current workspace filesystem permissions. The environment must permit creation of the repository metadata before initialization can succeed.
