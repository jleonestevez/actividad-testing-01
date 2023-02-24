module.exports = {
    //...
    testEnvironment: 'node',
    transform: {
        '^.+\\.tsx?$': ['ts-jest'],
    },
    testMatch: ['**/__tests__/**/*.test.ts'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
