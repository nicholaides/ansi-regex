type Assertion = {
    assertion: 'matches';
    input: string;
    expectedOutput: string[];
} | {
    assertion: 'splits';
    input: string;
    expectedOutput: string[];
};
type TestCase = {
    testCase: string;
    assertions: Assertion[];
};
export declare function generateTestCases(): TestCase[];
export {};
