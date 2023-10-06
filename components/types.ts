export interface Invoice {
    identity: number;
    title: string;
    description: string;
    imageUrl: string;
    requestedAmount: number;
    payedAmount: number;
    status: InvoiceStatus;
    creationDate: string;
    dueDate: string;
    type: InvoiceType;
    direction: InvoiceDirection;

    receiver: {
        identity: number;
        address: string;
        relatedZone: {
            identity: number;
            logoUrl: string;
            networkId: string;
            name: string;
        };
    };

    requester: {
        identity: number;
        address: string;
    };

    payerEmail: {
        identity: number;
        address: string;
    };

    payerWallet: {
        identity: number;
        address: string;
    };

    requestedAsset: string;
    payedAsset: string;
}


export type InvoiceType = 'invoice' | 'listing';
export type InvoiceDirection = 'INCOMING' | 'OUTGOING' | 'NEUTRAL';
export type InvoiceStatus = 'pending' | 'resolved' | 'rejected';