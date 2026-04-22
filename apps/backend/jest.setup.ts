import { config } from 'dotenv';
import path from 'path';

// This handles running tests from the root or the package folder
config({ path: path.resolve(process.cwd(), '.env') });