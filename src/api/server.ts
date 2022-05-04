let token = '4fe74bddc2ddc2701b456f8d860f64cc19d84bd644895f0d';

export const serverCalls = {
    get: async () => {
        const response = await fetch(`https://drone-inventory-87.herokuapp.com/api/drones`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })
    }
}