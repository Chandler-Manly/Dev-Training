export const baseURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/Dev-training`;

export const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
  },
};
export const algoURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASETWO}/algorithms`;


