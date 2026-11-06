# Education Skills Transition Desk

## One-sentence benefit
Helps education authorities coordinate basic skills, teacher capacity, responsible digital learning and vocational pathways.

## Live demo
Run the Java service and Vue application locally to use the complete experience.

## Screenshots
![education skills transition workspace](docs/screenshot.png)

## Main features
Search transition plans, add a realistic delivery action, progress implementation review, inspect priorities and open dedicated guidance.

## Technology used
Vue, TypeScript, Pinia, Vue Router, Vite, Spring Boot and Java.

## Installation instructions
Start the backend with `cd backend && mvn spring-boot:run`. In another terminal run `npm install && npm run dev`.

## Commercial licensing/contact
Commercial licensing and implementation support are available through the repository owner.

## Business problem and users
Education ministries, school authorities, teacher-support services and vocational partners need one view of outcomes, capacity and responsible owners.

## Key workflows
Users can filter transition plans, create a Benelux vocational exchange, move it through review and open implementation guidance.

## Vue framework highlights
The application uses the Composition API, Pinia computed state, reactive filters and Vue Router pages.

## Java backend highlights
The Spring Boot service provides real list, search, create and update endpoints, validation, clear errors, health reporting and tests.

## Architecture and state flow
Pinia owns the shared client state and synchronises it with the Java API after reads and writes.

## Accessibility and responsive behaviour
Landmarks, labels, visible focus, readable status text and responsive panels support keyboard and mobile users.

## Verification commands
Use `npm test`, `npm run build`, and `cd backend && mvn test package`.

## Structure
`src` contains the Vue experience, `backend` contains the Java service, and `docs` contains verified media.

## Tradeoffs
The demonstration uses an in-memory data store; production deployment would add authentication, school data, programme funding and evidence lineage.

## Roadmap
Add learner-outcome indicators, teacher capacity planning, school alliance workspaces, multilingual reporting and durable storage.
