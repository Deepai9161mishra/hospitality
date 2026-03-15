import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import prerender from '@prerenderer/rollup-plugin'
import jsdomRenderer from '@prerenderer/renderer-jsdom'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// All routes for pre-rendering (SEO optimization)
const staticRoutes = [
  '/',
  '/about',
  '/appointment',
  '/services',
  '/departments',
  '/doctors',
  '/packages',
]

// Service detail pages
const serviceRoutes = [
  '/services/critical-care',
  '/services/emergency-service',
  '/services/surgical-service',
  '/services/dialysis-unit',
  '/services/newborn-care',
  '/services/patient-accomodation',
  '/services/physiotherapy-service',
  '/services/dietetics-counselling',
  '/services/diabetes-care',
  '/services/diagnostic-service',
]

// Department detail pages
const departmentRoutes = [
  '/departments/endocrinology',
  '/departments/gynecology',
  '/departments/plastic-and-cosmetic-surgery',
  '/departments/urology',
  '/departments/pulmonology',
  '/departments/internal-medicine',
  '/departments/orthopedics-surgery',
  '/departments/pediatrics-and-neonatology',
  '/departments/pathology-and-microbiology',
  '/departments/anaesthesia-critical-care',
  '/departments/laparoscopic-surgery',
  '/departments/neurology',
  '/departments/cardiology',
  '/departments/nephrology',
]

// Doctor detail pages
const doctorRoutes = [
  '/doctors/dr-arpit-garg',
  '/doctors/dr-megha-pandove-garg',
  '/doctors/dr-ajatashatru-kapoor',
  '/doctors/dr-ankit-singla',
  '/doctors/dr-bindu-singla',
  '/doctors/dr-j-l-garg',
  '/doctors/dr-ayush-jain',
  '/doctors/dr-hemant-tuli',
  '/doctors/dr-rajiv-jindal',
  '/doctors/dr-jaspreet-singh-khanna',
  '/doctors/dr-vishal-kharbanda',
  '/doctors/dr-rajinder-kumar-goyal',
  '/doctors/dr-himanshu-bansal',
  '/doctors/dr-manminder-kaur',
  '/doctors/dr-jeewan-mittal',
  '/doctors/dr-sahil-arora',
]

// Health package detail pages
const packageRoutes = [
  '/packages/healthy-heart',
  '/packages/diabetes',
  '/packages/brain-test',
]

// Combine all routes
const allRoutes = [
  ...staticRoutes,
  ...serviceRoutes,
  ...departmentRoutes,
  ...doctorRoutes,
  ...packageRoutes,
]

// Check if pre-rendering should be skipped (useful for quick dev builds)
const skipPrerender = process.env.SKIP_PRERENDER === 'true'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      plugins: [
        // Only add prerender plugin if not skipped
        !skipPrerender && prerender({
          routes: allRoutes,
          renderer: jsdomRenderer,
          rendererOptions: {
            // Wait for React and Helmet to fully render (jsdom supports renderAfterTime)
            renderAfterTime: 2500,
          },
          postProcess(renderedRoute) {
            // Ensure proper formatting
            renderedRoute.html = renderedRoute.html
              .replace(/<!--[\s\S]*?-->/g, '') // Remove HTML comments
              .replace(/\s{2,}/g, ' ') // Reduce multiple spaces
            return renderedRoute
          },
        }),
      ].filter(Boolean),
    },
  },
})
