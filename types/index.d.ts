// Definitions by: Julian Grinblat <https://github.com/perrin4869>
// TypeScript Version: 3.0
/// <reference types="chai" />

// Merge namespace with global chai
declare global {
    namespace Chai {
        interface TypeComparison {
            ip: Assertion;
            ipv4: Assertion;
            ipv6: Assertion;
        }
    }
}

declare function chaiIp(chai: any, utils: any): void;

export default chaiIp;
