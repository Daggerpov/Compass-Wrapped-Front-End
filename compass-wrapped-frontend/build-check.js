// Simple script to check build environment
import { execSync } from 'child_process';

console.log('NODE VERSION:', process.version);
console.log('NPM VERSION:', execSync('npm --version').toString().trim());

try {
  console.log('VITE VERSION:', execSync('npx vite --version').toString().trim());
  console.log('Vite is available ✅');
} catch (error) {
  console.error('Vite command not found ❌');
  console.error(error.message);
}

console.log('Installed packages:');
console.log(execSync('npm list --depth=0').toString()); 