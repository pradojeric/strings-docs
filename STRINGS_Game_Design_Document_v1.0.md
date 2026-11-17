# STRINGS — Game Design Document

**Version:** 1.0 — Consolidated Gameplay Design  
**Date:** 17 November 2026  
**Status:** Design baseline approved through discussion; implementation and playtest validation pending  
**Genre:** Single-player, first-person action-adventure roguelite with cultural exploration  
**Initial delivery:** Desktop web-browser prototype; mobile-compatible experience is a design target  
**Visual direction:** Low-poly 3D, cel-shaded surfaces, bold black outlines, readable silhouettes  
**Project:** STRINGS

> **Document rule:** Statements marked **Locked** are agreed design decisions. **Proposed** elements are working designs that require validation. **Deferred / TBD** elements are deliberately outside the current specification. Values under **Initial tuning** are hypotheses, not proven balance.

## 1. Executive Summary

STRINGS follows a keeper of memories who travels from **Aking Museo** into distorted, fictionalized memory-spaces inspired by the culture and places of Pangasinan, Philippines. The player investigates semi-open regions, hears spatial **Echoes**, traces glowing **Hibla** threads, collects cultural artifacts, and survives supernatural threats using one Light-powered device. Returning artifacts permanently restores the museum's catalogue and gradually reconnects the world to its memories.

The game blends fast but readable first-person combat with periods of unhurried investigation. Each region is its **own roguelite run**. Temporary combat enhancements reset on the run's conclusion or failure; cultural discoveries, permanently unlocked Light abilities, unlocked regions, and first-time Guardian victories persist. The campaign follows **PONSIA → LIKET → PANANISIA**. The first defeat of each Guardian grants its unique soul and permanently advances the campaign; collecting all three souls unlocks a separate final-boss encounter. Replaying Guardians is optional.

The game must deliver two outcomes: a player remembers **how they survived** and **what cultural story they uncovered**.

### 1.1 Player promise

*Hear the Echo. Follow the Hibla. Find the memory. Carry its story home.*

### 1.2 Design pillars

1. **Distinctive places:** Each region has recognizable, handcrafted landmarks, routes, sounds, and cultural context.
2. **Balanced action:** Fast movement and precise Light Bolt combat alternate with deliberate tactical breathing room.
3. **Exploration first for discoveries:** Artifacts are located using Echo and Hibla, then collected through a simple interaction—not through a mandatory tether minigame.
4. **Progress without erasure:** Cultural discoveries and first Guardian clears are permanent, even when a run fails.
5. **Choice without weapon proliferation:** One Light device develops through permanent active-ability unlocks and temporary run modifiers.
6. **Responsible cultural presentation:** Verified cultural information is clearly separated from invented supernatural narrative.

## 2. Design Authority and Scope

### 2.1 Locked decisions

| System | Baseline decision |
| --- | --- |
| Perspective and pacing | First-person; fast, balanced encounters with room to explore |
| Device | One permanent Light device; unlimited primary ammunition and hip-fire |
| Active abilities | Two equipped active-ability slots |
| Passive effects | Passive modifiers can change device and active-ability behavior |
| Ability unlocks | Permanent base abilities earned through exploration and Guardian victories |
| Run rewards | Temporary enhancements reset when a region run ends |
| Movement | Sprint, single jump, and directional dash; no stamina |
| Artifact collection | Echo → Hibla → locate → interact → discovery saved |
| Enemies | Combination of authored encounters and finite controlled dynamic spawns |
| Healing | Limited Lumina pickups plus Light Mend with cooldown-only healing |
| Difficulty | Primarily determined by region and authored encounter; no time-based scaling |
| Campaign | One region per run; first Guardian clear permanently grants a soul |
| Guardian replay | Optional after the first clear |
| Final boss | Unlocked by all three Guardian souls; separate campaign encounter |

### 2.2 Included, proposed, and deferred

**Included in the design baseline:** Solo exploration, Light Bolt combat, two active slots, temporary modifiers, Chaser and Spitter enemies, artifact detection and direct collection, three regions, museum persistence, Guardian souls, and region-specific runs.

**Proposed for iterative design:** Four initial active abilities, region-specific hazards, permanent passive unlock choices, authored route variations, run reward frequency, and detailed Guardian move sets.

**Deferred:** Co-op multiplayer, online accounts, fully procedural cities, broad weapon/armor loot, extensive new enemy families, all final art and audio, and full production mobile optimization. Cultural riddles (*bugtong*) may appear later but are not required for the first playable.

## 3. World, Fiction, and Narrative

### 3.1 Setting and premise

In STRINGS, a fictional catastrophe has fractured connections between people, places, and remembered traditions. Its effects are visualized through distorted memory-worlds: flooded pathways, silent markets, incomplete celebrations, and fragmented landmarks. The game does **not** assert that the real locations or traditions of Pangasinan were literally destroyed or forgotten.

The player begins with damaged personal memory and serves as a **keeper of memories**. Aking Museo is a mostly intact refuge and archive. Through its entrances the player enters the three playable regions. **Hibla**—named for a thread associated with the project's fishing-net imagery—appears as a luminous blue connection between a place and its missing memory. **Echoes** convey environmental sounds, voices, and fragments of prior life.

The identity of the player, cause of the catastrophe, nature of the memory distortion, meaning of taking a Guardian soul, and final antagonist's identity are **narrative TBD**. Those questions must be resolved during narrative production, without delaying core mechanics prototyping.

### 3.2 Narrative delivery

| Layer | Player-facing question | Delivery |
| --- | --- | --- |
| Immediate | Where is the next artifact? | Echo, Hibla, nearby environment, simple objective text |
| Region | Why is this place distorted? | Three core memory scenes, environmental change, Guardian presentation |
| Campaign | What links the three regions? | Museum exhibits, persistent chapter milestones, Guardian souls |
| Optional | What else can be learned here? | Side artifacts, cross-referenced journal entries, later revisits |

Essential story information must be discoverable in a normal completion of each region. Rare routes or optional artifacts may add nuance but cannot be the sole source of the primary plot.

### 3.3 Aking Museo

The museum is the safe hub: a dry, largely intact abandoned building showing light neglect, a central atrium, fishing-net motifs, exhibit cases, warm daylight, and entrances associated with each region. It holds previously recovered cultural entries, indicates Guardian souls and unlocked regions, lets players choose two active abilities before entry, and provides clear new-run controls. Exhibits visually and audibly improve as memories return.

## 4. Campaign and Run Structure

### 4.1 Campaign progression — Locked

1. **PONSIA** is available at the beginning. Its first Guardian victory grants **Soul I** and unlocks LIKET.
2. **LIKET** is then available. Its first Guardian victory grants **Soul II** and unlocks PANANISIA.
3. **PANANISIA** is then available. Its first Guardian victory grants **Soul III**.
4. All three collected souls permanently unlock a **separate final-boss encounter**.
5. Any unlocked region can be replayed. A Guardian already defeated can be fought again optionally; its soul is never duplicated.

One region, including its Guardian, is one run. The final-boss encounter has its own entry/exit contract, to be specified with the boss design. There is **no required three-region continuous run** in this baseline.

### 4.2 Run state versus persistent state

| Event or data | During a run | After death, quitting, or restarting |
| --- | --- | --- |
| Current health, enemy states, stage hazards | Mutable | Reset on next run |
| Temporary Light enhancements and selected run rewards | Active for that run | Removed |
| Temporary route openings and encounter seed | Specific to that run | Re-selected or reset |
| Artifacts already found in this run | Count toward current Guardian access | Current objective count resets |
| First discovery of a cultural artifact | Added to journal immediately | **Retained permanently** |
| Permanent Light abilities and unlock conditions | Available subject to loadout | **Retained permanently** |
| Guardian soul and region access | Added on first victory | **Retained permanently** |
| Museum exhibit state and settings | Reflected in hub | **Retained permanently** |

**Save rule:** A new cultural discovery must be committed immediately on successful interaction, not only at the end of a run. The same artifact may appear on later runs as a repeatable memory objective, but should show a short recap rather than duplicate the museum entry.

**Quit rule (initial MVP):** No mid-run resume. Leaving a run forfeits temporary enhancements and current stage progress; successfully recorded discoveries and permanent milestones remain.

### 4.3 Region structure and target duration

A mature region uses **three required cultural memories**, optional side discoveries, several bounded encounters, an environment-restoration beat, and a Guardian trial. The early PONSIA full MVP deliberately uses **two required memories and one optional** to test this loop. The successful MVP run targets approximately **10–15 minutes after the tutorial**; actual duration requires playtesting. Full-region and final-boss durations are **TBD**.

## 5. Moment-to-Moment Gameplay

### 5.1 Primary loop

**Museum preparation → enter region → explore routes → hear Echo → trace Hibla → collect artifact → engage or avoid authored combat routes → choose temporary enhancement → complete required memories → face Guardian → return to museum.**

The route should offer several instances of each of these gameplay rhythms:

- **Exploration:** Low pressure, navigation, optional environmental interpretation, artifact searching.
- **Combat:** Short, deliberate, readable encounters with meaningful positioning and threat prioritization.
- **Reflection:** Safe artifact-reading moments and visible changes in the environment or museum.

No hidden timer punishes players for inspecting cultural information. Dynamic enemy encounters cannot repeatedly interrupt a protected reading state.

### 5.2 Encounter boundaries

An authored arena or route zone has readable entrances, traversable cover, a finite enemy budget, and a defined completion condition. A cleared zone remains safe for a meaningful investigation period. The region may contain noncombat shortcuts and optional dangerous detours, but a required artifact is not automatically a combat minigame.

## 6. Player Controller and Input

### 6.1 Movement contract — Locked

- Walk in any horizontal direction; normalize diagonal movement.
- Sprint without stamina. The player may fire while sprinting.
- Perform one jump while grounded; retain initial horizontal momentum with limited air steering.
- Dash horizontally in a movement direction, or forward when stationary. Dash has a cooldown and no invulnerability; it collides with solid world geometry.
- Allow aiming during sprint, jump, and dash. Primary firing pauses briefly during the dash itself and can resume after it ends.
- Ground motion follows walkable slopes and stairs. Air dash preserves vertical velocity. No wall-running, double jump, slide, or climbing is required for the MVP.

### 6.2 Initial tuning values — unvalidated

| Parameter | Initial value |
| --- | ---: |
| Walk / sprint | 6 / 8.5 m/s |
| Ground acceleration / braking | 50 / 60 m/s² |
| Jump height / gravity | 1.2 m / 24 m/s² |
| Dash | 18 m/s for 0.18 s; ~3.24 m maximum unobstructed travel |
| Dash cooldown | 3 s, measured from activation |
| Starting Liwanag (health) | 100 |

### 6.3 Proposed desktop input map

| Input | Action |
| --- | --- |
| WASD / mouse | Move / look |
| Shift (hold) | Sprint |
| Space | Jump |
| Q | Dash |
| Left mouse (hold) | Primary Light Bolt casting |
| 1 / 2 | Equipped active ability slots |
| E | Interact / collect artifact |
| F | Briefly focus and reveal active Hibla guidance |
| J | Journal / discoveries |
| Escape | Pause / release pointer lock |
| R on result screen | Retry / new attempt |

This is a **proposed binding layout**, not a locked control scheme. Input rebinding, gamepad mapping, and an accessible touch layout must be considered before mobile release. Two active abilities remain the maximum equipped regardless of input platform.

## 7. Light Device: Weapon and Ability System

### 7.1 Base Light Bolt — Locked behavior

The player always owns one hand-and-lure Light caster. Its standard attack fires a visible fast projectile toward the crosshair. The device has **unlimited ammunition, automatic hold-to-fire, no reloading, no aiming down sights, no random spread, and no gameplay recoil** at baseline. Projectile travel time creates a requirement to lead moving enemies. Solid cover blocks attacks. Cosmetic hand animation must not shift gameplay aim.

**Initial tuning, subject to playtest:** 8 casts/s (0.125 s interval); 65 m/s projectile; 20 damage; 1 s lifetime. At first, body hits are sufficient; weak points and alternative firing mechanics are deferred.

### 7.2 Active abilities — two equipped slots (Locked architecture)

Active abilities are deliberately triggered and have cooldowns or startup commitments. The player can permanently unlock abilities via **exploration and Guardian milestones**, then select **two** for the next region run at Aking Museo. The underlying ability remains unlocked after death. Exact unlock mapping and cooldowns are design tasks.

| Candidate active ability | Proposed action | Tactical use | Status |
| --- | --- | --- | --- |
| Charged Light | Charge and release one stronger projectile | Burst against priority targets | Proposed |
| Light Pulse | Short-range radial burst | Create space under close pressure | Proposed |
| Thread Snare | Temporarily slow one enemy | Control approach or protect a route | Proposed |
| Light Mend | Restore Liwanag on a long cooldown | Survival and recovery | Healing rule Locked; tuning Proposed |

No specific ability should be required to complete the first PONSIA run. Future Guardians may introduce reasons to choose different loadouts, but must not demand a single permanent unlock as the only winning solution.

### 7.3 Passive modifiers and temporary enhancements

Passive modifiers automatically change actions or conditions. Some passive **options** may become permanently selectable through campaign progress; **run enhancements** are always temporary. Examples: a Light Bolt forks after impact; a dash briefly strengthens the next shot; Light Pulse's radius increases; a marked target takes improved precision damage. These are **examples, not an approved full item list**.

An enhancement is selected from a small, understandable set after an encounter or at an authored supply site. Reward choice should alter tactical behavior, not merely stack anonymous raw damage. Avoid uncapped stacking, accidental invulnerability, and combinations that nullify Guardian attack patterns. Enhancement acquisition and equipment reset are entirely separate from cultural artifact collection.

## 8. Liwanag, Healing, and Failure

### 8.1 Health rules — Locked

- Start a new run at 100 Liwanag (provisional maximum).
- No passive health regeneration.
- Limited **Lumina** pickups restore health up to the maximum; pickups are authored or bounded rewards, not endlessly farmable drops.
- **Light Mend uses cooldown-only healing:** no consumable charges and no healing resource cost.
- Damage grace briefly prevents multiple simultaneous valid hits; dash itself offers no immunity.
- Reaching zero Liwanag ends the current run and displays a stable Defeat state.

### 8.2 Light Mend design resolution

**Chosen rule:** Cooldown-only healing remains usable outside combat. This can permit waiting between fights to refill health, and that behavior is accepted as an explicit tradeoff rather than silently prevented by an extra cost.

**Proposed starting tune:** Heal +20 Liwanag; 45-second cooldown; no overheal. It can be used while moving and in exploration. Balance should focus on damage avoidability, encounter pressure, and Guardian pattern mastery rather than persistent attrition. Playtesting must measure how often players wait for healing; if waiting dominates, revisit cooldown/encounter flow **with a documented design decision**, not an undisclosed charge system.

### 8.3 On defeat

Enemy simulation stops; active projectiles and pending attacks are cleared; a result screen offers return to Aking Museo or retry. A retry begins a fresh valid region attempt and restores health, dash, starting loadout, and run state. A discovered artifact remains in the journal even when its current-run objective contribution resets.

## 9. Enemies, AI, and Encounter Direction

### 9.1 Initial enemy archetypes

| Enemy | Role | Essential telegraph / counter |
| --- | --- | --- |
| **Chaser** | Close pressure; approaches and lunges | Read wind-up, move out of locked lunge, dash/reposition |
| **Spitter** | Ranged pressure; seeks sightlines | Read locked shot, strafe, dodge or use cover |
| Heavy creature | Future durable zone pressure | Read slow committed attacks; flank or reposition |
| Support creature | Future target priority | Interrupt support effect by handling support enemy |

The first combat MVP includes **only Chaser and Spitter**. Enemy attacks cannot hit through solid cover or before the advertised tell; melee cannot damage when a target is outside valid reach. Enemy animation and effects cannot obscure counterplay.

### 9.2 Initial Chaser and Spitter implementation reference

The combat milestone plan provides provisional starting behavior: Chaser approaches at approximately 7 m/s, begins a 0.55 s wind-up near 3 m, locks lunge direction before a short strike, and recovers for 0.8 s. Spitter repositions at approximately 8–14 m, telegraphs a straight dodgeable projectile for 0.65 s, then recovers for 1.2 s. They begin at 100 and 80 health, respectively. These parameters remain **playtest variables** and are not required at production scale.

### 9.3 Hybrid encounter architecture — Locked

- **Authored encounters:** Designer-defined combinations, geography, approach routes, and Guardian lead-ins.
- **Controlled dynamic encounters:** Finite enemy selections from region-specific pools at validated spawn sockets. Variation comes from composition, entry point, and optional route—not uncontrolled enemy regeneration.
- Spawn sockets are never directly beside the player without warning; attacks cannot begin before clear telegraphs.
- A bounded active-enemy cap protects readability and browser performance. The combat micro MVP allows a maximum of two at once; broader caps are **TBD**.
- Enemies and encounters must stop during protected memory viewing. Clearing a zone leaves a window for observation and navigation.
- Replays may vary encounters but must retain dependable landmark visibility, routes, and objective access.

### 9.4 Difficulty progression — Locked

Difficulty increases primarily by **region and encounter composition**. No mandatory global time-based difficulty ramp and no adaptive difficulty based on player performance are included in the baseline. PONSIA teaches fundamental enemy patterns; LIKET combines timing and moving hazards; PANANISIA emphasizes verticality, sightlines, and coordinated pressure. Avoid merely increasing hit points to lengthen fights.

## 10. Echo, Hibla, and Artifact Collection

### 10.1 Discovery mechanics — Locked

1. **Detect:** A distinctive spatial Echo becomes audible; visual captions and directional indicators provide equivalent information.
2. **Trace:** A luminous Hibla connection appears nearby and can be briefly emphasized using a focus action. It indicates an accessible route, not a misleading straight line through walls.
3. **Find:** The player investigates the site's surroundings to identify the artifact.
4. **Collect:** A short proximity-based interaction records the artifact. No anchor destruction, tether-pulling sequence, or forced defensive hold is required.
5. **Remember:** The journal entry saves immediately, the associated exhibit becomes available, and the region provides a brief sensory restoration cue.

The initial Echo ~28 m and Hibla ~13 m ranges in the prior GDD are **prototype references only**. They should be tuned to actual map size, acoustics, and visibility.

### 10.2 Accessibility and fail-safes

Each required memory must be reachable without an optional mobility upgrade, precision dash, or prior cultural answer. Echoes have captions or other visual equivalents; Hibla uses silhouette, motion, or pattern in addition to blue color. If the player remains lost, strengthen the active lead rather than automatically collecting the artifact. The last required artifact must remain legible even if many prior sites have been restored.

### 10.3 Cultural entry handling

A first discovery presents a brief readable summary in a protected state. Longer material is accessible later in the museum. Each entry distinguishes **verified cultural facts**, attributed stories where available, and **fictional STRINGS lore**. Repeated artifacts show a short recap. The game never erases a factual journal entry when a run fails.

## 11. Regions, Level Design, and Environmental Identity

STRINGS uses **handcrafted semi-open regions with controlled procedural variation**. Terrain, landmarks, and required connections remain authored; a seed may change open side routes, encounter selections, optional sockets, and temporary reward offers. Randomizing every street or deforming terrain per run is out of scope.

| Region | Theme and stable anchors | Level / combat identity | Guardian |
| --- | --- | --- | --- |
| **PONSIA** | Food and market life; market spine, stalls, cooking courtyard, dock, waterfront | Tight lanes, raised terraces, lower river walk, changing cover | **Feastkeeper** (working design) |
| **LIKET** | Festivals and communal joy; parade avenue, lantern area, bandstand, river edge | Moving hazards, ranged exchanges, rhythmic timing | **Reveler** (working design) |
| **PANANISIA** | Landmarks, faith, and civic memory; archive, landmark-inspired spaces, vertical route, tower | Terraces, height, sightlines, constrained approaches | **Keeper of Memories** (working design) |

### 11.1 Terrain and traversal rules

Full-region stages use uneven but authored terrain: ramps, short stairs, gently sloped lanes, elevations, terraces, shallow courtyards, and river-edge paths. Mandatory objectives have a continuous walkable path. High ground must not be an enemy-proof exploit: Chasers need a valid approach, Spitters need fair firing positions, and attacks must respect height and collision. Every safe drop has a walkable route back. Water and out-of-bounds surfaces receive explicit physical boundaries. The initial combat courtyard stays flat; terrain integration begins in the PONSIA stage milestone.

### 11.2 Procedural variation constraints

Each allowed layout must retain access to required memories, the Guardian, and the exit. Critical visual anchors cannot shift unpredictably. Artifact sockets must be authored and checked for reasonable visibility, stable footing, and clear prompts. All random seeds are recorded for bug reproduction. The first prototype uses **one fixed map**; route variation enters only after movement, combat, and artifact searching are reliable.

## 12. Guardian Trials and Final Encounter

### 12.1 Region Guardian contract — Locked progression

A Guardian encounter becomes accessible after the region's required artifact objectives are satisfied. On the **first victory**, its soul is added to persistent campaign progress and the next region is unlocked. On later visits, the Guardian is optional and can offer a run challenge without re-awarding its soul.

Each Guardian must have visibly telegraphed attacks, understandable damage windows, collision-consistent cover behavior, and a readable victory/defeat result. The challenge should test the region's taught skills; no rare temporary upgrade is required to win.

### 12.2 Proposed Guardian emphasis

- **Feastkeeper / PONSIA:** Introductory Guardian testing Chaser/Spitter-era positioning, clear dodge windows, and simple arena control.
- **Reveler / LIKET:** Timing, moving hazards, and multi-threat prioritization.
- **Keeper of Memories / PANANISIA:** Vertical navigation, elevated firing angles, and combined pattern recognition.

Exact appearance, phases, health, damage, and lore are **TBD**. The first PONSIA MVP uses a simplified Feastkeeper with **two attack patterns and one clearly signaled damage opportunity**.

### 12.3 Final boss

The separate final-boss encounter unlocks when **all three distinct Guardian souls** exist in persistent state. It must not require another full clear of PONSIA, LIKET, and PANANISIA. The encounter's narrative identity, combat phases, and failure/retry contract are **TBD**.

## 13. Museum, Progression, and User Experience

### 13.1 Persistent unlocks

The museum records discovered artifact identifiers, viewed cultural entries, three Guardian-soul flags, region access, unlocked active abilities, unlocked passive choices (if adopted), tutorial completion, and accessibility settings. Progress is stored locally for the solo-first release; a player account is not required. Data should be versioned and validated to survive ordinary browser relaunch and future schema changes.

### 13.2 Loadout and reward flow

Before entering a region, the player chooses **two active abilities** from those permanently unlocked. During the run, reward choices provide temporary passive or active-skill enhancements, with clear descriptions and visible HUD indicators. The game must remain completable with the base caster and the abilities reasonably available at that stage. Cultural artifacts never become ammunition or purchasable combat bonuses.

### 13.3 HUD and feedback

Minimum HUD: health (Liwanag), fixed crosshair, dash readiness, two active-ability cooldowns, current region objective, Echo direction when relevant, discovery feedback, and clear incoming-attack indicators. Temporary modifiers appear compactly; avoid a screen-consuming inventory. Subtitle all meaningful voices and Echoes, show threat tells without relying on color, and allow control of camera shake, sensitivity, text size, and effect density.

Solo play pauses on focus loss and clears held input. On returning, the user must explicitly resume rather than immediately firing or dashing. All culturally important information must remain readable without spatial audio.

## 14. Visual and Audio Direction

The visual target is **low-poly 3D with cel shading and bold outlines**, using angular silhouettes, simple surface materials, high-contrast attacks, and distinctive landmarks. The inspirations are the readability and velocity of modern arcade shooters, but STRINGS retains its own hand-and-lure Light identity and Pangasinan-centered environments.

- **Combat:** Readable enemy silhouettes, distinct wind-ups, minimal camera-obscuring effects, clear hit confirmation.
- **Hibla:** Luminous blue thread using shape and movement as well as color; foreground/background legibility is essential.
- **Echo:** Place-specific environmental motifs, e.g., market bells, celebration rhythms, or ambient landmark sounds, with captioned equivalents.
- **Restoration:** A restrained environmental transition from muted distortion to warmer activity, sound, and memory; no heavy cinematic interruption is required for every pickup.
- **Museum:** Warm, safe, contemplative contrast to hazardous regions.

Final art direction, soundtrack, voice cast, and environment assets are **production-phase work**. Placeholder art is appropriate for mechanics validation.

## 15. Technical and Accessibility Requirements

### 15.1 Platform approach

Target a **browser-based single-player prototype**, with Three.js the intended prototype framework from project planning. Desktop mouse-and-keyboard is the first validation path. Responsive interface and mobile-compatible interaction are design goals; mobile touch control and performance must be tested before claiming mobile release quality. The production engine and final distribution remain revisitable technical decisions.

### 15.2 Runtime and implementation boundaries

- Movement, projectile collision, and cooldowns must be frame-rate independent.
- Projectiles use swept/segment collision to avoid passing through thin cover on slower frames.
- Aim direction must match the camera while the launch socket respects nearby cover.
- Enemy states, spawn timers, and attack tells must remain deterministic enough to reproduce bugs from a logged run seed.
- State is separated into **persistent campaign data**, **ephemeral run data**, and **stage presentation state**.
- Single-player gameplay should remain available without a constant network connection after required assets are cached, subject to browser storage constraints.
- No multiplayer authority, rollback, shared rewards, or anti-cheat is required for the MVP.

### 15.3 Usability minimums

Provide subtitles, visual Echo directions, adjustable sensitivity, legible typography, scalable text, pause, simple Retry, and settings for camera motion/effect intensity. When mobile controls are added, expose movement, aiming, firing, dash, jump, interact, and both ability slots without hiding essential combat or cultural prompts.

## 16. Cultural Content and Editorial Rules

Existing project inventory records **27 cultural artifacts** (11 food, 9 festivals, 7 landmarks) and **127 curated bugtong**. This is a source-content pool, not a requirement to include everything in a single run or the first MVP. The final core/optional allocation must be editorially reviewed.

Cultural descriptions must be fact-checked. Pangasinan spelling, diacritics, translations, place references, and festival attribution receive review before release. The journal differentiates documented descriptions, attributed personal or local accounts, and the invented disaster/Hibla/Guardian fiction. A cultural item is never treated as disposable combat loot. The invented region layouts are inspired by places but must not falsely present composite architecture as an exact real-world map.

## 17. MVP and Development Milestones

A solo developer can validate the concept with placeholder geometry and short repeatable browser builds. Each milestone is implemented, tested, tuned, then marked **Pass / Needs tuning / Blocked** before continuing. No stage is asserted complete merely because it appears in this document.

### 17.1 Gate A — combat micro MVP (M1–M5)

**M1:** Flat courtyard graybox; WASD, sprint, jump, dash, camera and pause.

**M2:** Primary Light Bolt firing against static and moving practice targets; hit and cover validation.

**M3:** Chaser and Spitter individually and in a mixed pair; telegraphs, valid attacks, damage grace.

**M4:** Fixed six-enemy encounter in three pairs (max two active), two +20 Lumina pickups, win/lose/Retry and clean reset.

**M5:** At least ten scripted developer attempts plus focus loss, muted play, frame-rate checks, and three consecutive Retry cycles. Gate A passes only when the action is responsive, readable, fair, and reproducible.

**Not included in Gate A:** Guardian, Echo, Hibla, artifact collection, permanent abilities, Light Mend, museum, procedural routes, and final art. Light Mend is added after the base health and encounter contract works.

### 17.2 PONSIA full MVP (M6–M12), revised for v1.0

| Milestone | Playable output and acceptance emphasis |
| --- | --- |
| **M6** | Compact fixed PONSIA layout with uneven terrain, walkable routes, combat connectivity and no enemy-proof perches |
| **M7** | Echo and Hibla lead to one artifact; short direct interaction, cultural card, and local restoration cue |
| **M8** | Two required artifacts and one optional; artifact interactions save discovery; authored/finite combat zones coexist with safe exploration |
| **M9** | Two-slot loadout; initial ability unlock demo, Light Mend tuning, and temporary modifiers that cleanly reset |
| **M10** | Simplified Feastkeeper; two attack patterns, clear opening, first-clear Soul I and next-region unlock |
| **M11** | Small playable museum; save/reload, new-run reset, two validated authored route variants and finite dynamic encounter variation |
| **M12** | End-to-end 10–15-minute target playtest: win, die before/after discovery, muted run, basic loadout, route variants, reload, repeated runs |

**Gate B:** Artifact guidance and direct collection function without debug waypoints and remain possible while muted.  
**Gate C:** Temporary enhancements and the two-slot system change decisions without making a particular unlock mandatory.  
**Gate D:** PONSIA run can be completed, failed, repeated, and relaunched with correct persistence and no blocking defects.

The previous M8 **contested tether recovery** and M9 **alternate weapon/armor loot** tasks are explicitly superseded. The prior continuous multi-region run target is superseded by one region per run.

### 17.3 Later expansion gates

Only after a validated PONSIA loop: produce LIKET and its Guardian, then PANANISIA and its Guardian, then the separately unlocked final boss. Add external-player usability tests before considering an unfamiliar-player experience validated. Co-op is a post-solo possibility, not an MVP dependency.

## 18. Playtest Measures and Acceptance

| Area | Evidence to collect | Minimum design question |
| --- | --- | --- |
| Movement | Frame-rate checks, collision failures, dash usage | Can players move reliably and escape telegraphed attacks? |
| Combat | Completion time, damage sources, target order, hit accuracy | Is the challenge readable and skill-sensitive? |
| Light abilities | Slot selections, ability use, modifier choices | Are both slots meaningful without one mandatory build? |
| Light Mend | Heal use in combat and time spent waiting outside combat | Does cooldown-only healing improve play without excessive waiting? |
| Encounter pacing | Number of interruptions, zone re-entry, spawn fairness | Do exploration windows actually remain quiet? |
| Artifact discovery | Wrong turns, time to Echo/Hibla, muted play | Can players find and collect artifacts unaided? |
| Persistence | Death after discovery, reload, duplicated entries | Are recovered cultural entries never lost or duplicated? |
| Guardians | Failed pattern reads, clear time, first soul persistence | Is the trial fair and does first victory advance progression? |
| Culture | What players remember, fact/fiction identification | Does a player learn something distinct about the region? |

No fixed success-rate targets or broad audience claims should be introduced until formative playtests provide evidence. Record browser build, seed, reproduction steps, tuning values, and blocker status for each failure.

## 19. Open Design Items and Risk Register

| Item | Current resolution / owner of future decision |
| --- | --- |
| Final ability list, passive slots, and unlock distribution | **Open**; two active slots and permanent/temporary separation are locked |
| Light Mend long-cooldown values and possible waiting exploit | **Risk accepted for prototype**; measure waiting; no hidden charge cost |
| Enemy cap beyond combat MVP | **Open**; maintain clear telegraphs and a finite spawn budget |
| Exact Guardian mechanics and final-boss narrative | **Open**; progression contract is locked |
| Player identity, catastrophe, and soul meaning | **Narrative open**, not to be confused with historical fact |
| Full-region completion time | **Open**; only PONSIA MVP has a provisional 10–15-minute target |
| Mobile launch readiness | **Open**; validate touch layout and device performance |
| Complete cultural artifact allocations | **Open**, subject to fact-check and cultural review |
| Whether permanent passive options occupy dedicated slots | **Open**; does not change the two active slots |

## 20. Change Log and Supersession Notes

| Version | Change |
| --- | --- |
| 0.5 (30 Sep 2026) | Reimagined GDD: three chapters, combat micro MVP, contested artifact tether, multi-stage run proposal |
| 1.0 (17 Nov 2026) | Replaced contested tether with simple artifact interaction; one Light device with two active slots; permanent unlocks plus temporary modifiers; cooldown-only Light Mend; hybrid finite enemy encounters; independent region runs; persistent Guardian souls; optional Guardian replay; separate final boss |

**Source documents reconciled:** *STRINGS — Reimagined Game Design Document* (v0.5), *STRINGS — Combat MVP Milestones* (v0.3), and *STRINGS — Full Game MVP and Milestones* (v0.4). This document is the current design authority where mechanics conflict with those older drafts. Detailed technical acceptance tests from the earlier milestone documents remain useful **unless explicitly superseded here**.

## Appendix A — Glossary

| Term | Meaning |
| --- | --- |
| **Aking Museo** | Safe hub and persistent cultural archive |
| **Hibla** | Glowing thread-like guidance connecting the player to cultural memories |
| **Echo** | Audible and visually captioned signal leading toward a cultural artifact |
| **Light device** | Player's permanent projectile-casting tool |
| **Light Bolt** | Unlimited-ammunition standard projectile attack |
| **Liwanag** | Player health |
| **Lumina** | Limited health-restoring pickup |
| **Light Mend** | Cooldown-only healing active ability |
| **Guardian soul** | Permanent first-victory campaign item; three unlock the finale |
| **Run** | One attempt in a single region, with resetting temporary enhancements |
| **Persistent discovery** | A cultural artifact entry retained after death or restart |
| **Temporary enhancement** | Run-scoped combat modifier cleared on run conclusion |
| **Alab** | Earlier proposed burst/energy system; **deferred**, not part of the v1.0 baseline |

---

*STRINGS — Game Design Document v1.0. Design baseline only: this document does not assert that mechanics, saves, encounter balance, or cultural review have already been implemented or validated.*
