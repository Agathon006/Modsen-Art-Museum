module.exports = {
	preset: 'ts-jest',
	setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
	testEnvironment: 'jsdom',
	collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
	coverageThreshold: {
		global: {
			branches: 30,
			functions: 30,
			lines: 30,
			statements: 30
		}
	}
};