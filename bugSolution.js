```javascript
// Solution 1: Using !important (use cautiously)
<div class="bg-gray-100 p-4">
  <h1 class="text-3xl font-bold !important">My Component</h1>
  <p class="text-gray-700 !important">Some text here.</p>
</div>

// Solution 2: Increasing specificity
<div class="bg-gray-100 p-4">
  <h1 class="text-3xl font-bold my-component-h1">My Component</h1>
  <p class="text-gray-700 my-component-p">Some text here.</p>
</div>

/* ...and then in your styles:
.my-component-h1 { @apply text-3xl font-bold; }
.my-component-p { @apply text-gray-700; }
*/

// Solution 3: Check for conflicting styles in your CSS or other stylesheets.
// Solution 4: Ensure correct Tailwind CSS configuration in your build process.
```