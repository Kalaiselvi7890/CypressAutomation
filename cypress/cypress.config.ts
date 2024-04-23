import { defineConfig } from 'cypress'
/// <reference types="cypress-image-compare" />
import "cypress-image-compare/commands";

export default defineConfig({
  video: true,
})