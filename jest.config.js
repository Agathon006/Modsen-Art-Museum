module.exports = {
	preset: 'ts-jest',
	transform: {
		'^.+\\.(ts|tsx)?$': 'ts-jest',
		'^.+\\.(js|jsx)$': 'babel-jest',
		"^.+\\.svg$": "<rootDir>/tests/svgTransform.js"
	},
	testEnvironment: 'jsdom',
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
		'^@assets/(.*)$': '<rootDir>/src/assets/$1',
		'^@components/(.*)$': '<rootDir>/src/components/$1',
		'^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
		'^@pages/(.*)$': '<rootDir>/src/pages/$1',
		'^@services/(.*)$': '<rootDir>/src/services/$1',
		'^@store/(.*)$': '<rootDir>/src/store/$1',
		'^@utils/(.*)$': '<rootDir>/src/utils/$1',
	}
};