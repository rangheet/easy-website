
import { api } from "./api";
import { config } from "./config";


export const services = {
    GetWebsiteData(params)
    {
        return api.get(`${config.BackendEndpoint}api/WebsiteData`, params);
    },

    SubmitWebsiteData(payload)
    {
        return api.post(`${config.BackendEndpoint}api/WebsiteData`, payload);
    }
}

