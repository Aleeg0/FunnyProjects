// src/api/CurrencyApi.ts
export interface LatestRequest {
    base_currency: string;
    currencies: string[];
}

export interface LatestResponse {
    meta: {
        last_updated_at: string;
    };
    data: {
        [currency: string]: {
            code: string;
            value: number;
        };
    };
}

export class CurrencyApiClient {
    private readonly apiKey: string;
    private baseUrl: string = 'https://api.currencyapi.com/v3';

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    // function return response in JSON
    public async getLatestRates(): Promise<LatestResponse> {
        const url = `${this.baseUrl}/latest?apikey=${this.apiKey}`;

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch latest exchange rates');
        }

        const data = await response.json();
        return data as LatestResponse;
    }
}
