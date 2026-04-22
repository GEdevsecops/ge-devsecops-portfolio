import 'dotenv/config'; // MUST be first
import { describe, it, expect } from '@jest/globals';
import { db } from './db';
import { users } from '@repo/shared';

describe('Database Integration Test', () => {
  it('should connect to the database and return an array from the users table', async () => {
    try {
      // TDD: We are testing the "Read" capability
      const result = await db.select().from(users);
      
      // Even if the table is empty, it should return an empty array []
      expect(Array.isArray(result)).toBe(true);
      console.log('✅ Database connection successful! Found', result.length, 'users.');
    } catch (error) {
      console.error('❌ Database connection failed:', error);
      throw error;
    }
  });
});