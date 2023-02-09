export interface WhoIsResponseShape {
    WhoisRecord: {
        administrativeContact: {
            country: string;
            countryCode: string;
            organization: string;
            rawText: string;
            state: string;
        };
        audit: {
            createdDate: string;
            updatedDate: string;
        };
        contactEmail: string;
        createdDate: string;
        createdDateNormalized: string;
        domainName: string;
        domainNameExt: string;
        estimatedDomainAge: number;
        expiresDate: string;
        expiresDateNormalized: string;
        footer: string;
        header: string;
        nameServers: {
            hostNames: string[];
            ips: string[];
            rawText: string;
        };
        parseCode: number;
        rawText: string;
        registrant: {
            country: string;
            countryCode: string;
            organization: string;
            rawText: string;
            state: string;
        };
        registrarIANAID: string;
        registrarName: string;
        registryData: {
            registrant: {
                country: string;
                countryCode: string;
                organization: string;
                rawText: string;
                state: string;
            };
            audit: {
                createdDate: string;
                updatedDate: string;
            };
            createdDate: string;
            createdDateNormalized: string;
            domainName: string;
            expiresDate: string;
            expiresDateNormalized: string;
            footer: string;
            header: string;
            nameServers: {
                hostNames: string[];
                ips: string[];
                rawText: string;
            };
            parseCode: number;
            rawText: string;
            registrarIANAID: string;
            registrarName: string;
            status: string;
            strippedText: string;
            updatedDate: string;
            updatedDateNormalized: string;
            whoisServer: string;
        };
        status: string;
        strippedText: string;
        technicalContact: {
            country: string;
            countryCode: string;
            organization: string;
            rawText: string;
            state: string;
        };
        updatedDate: string;
        updatedDateNormalized: string;
        subRecords: SubRecord[]; 
    };
};

export interface SubRecord { 
    createdDate: string;
    updatedDate: string;
    registrant: {
        country: string;
        countryCode: string;
        organization: string;
        rawText: string;
        state: string;
    };
    administrativeContact: {
        country: string;
        countryCode: string;
        organization: string;
        rawText: string;
        state: string;
    };
    technicalContact: {
        country: string;
        countryCode: string;
        organization: string;
        rawText: string;
        state: string;
    };
    domainName: string;
    nameServers: {
        hostNames: string[];
        ips: string[];
        rawText: string;
    };
};