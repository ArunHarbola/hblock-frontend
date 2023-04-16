import createApi from "../context/userApi";
const url = `http://34.131.122.182:8080`;
const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJPUkdfTkFNRSI6Ikhvc3BpdGFsMSIsIk9SR19JRCI6Ikhvc3BpdGFsMU1TUDp4NTA5OjovT1U9YWRtaW4vQ049YWRtaW46Oi9DPUVTL0w9QWxpY2FudGUvPUFsaWNhbnRlL089S3VuZyBGdSBTb2Z0d2FyZS9PVT1UZWNoL0NOPWNhIiwiTVNQX0lEIjoiSG9zcGl0YWwxTVNQIiwiaWF0IjoxNjgxNDU5NzAyfQ.Yf7MWhCMN-hv8GIqm1v87p1zX_aLkgo1bf6K2kbSIxI`;
const api = createApi(url, token);

const fetchRequests = async ()=>{
    try {
        const response = await api.get("/transaction/requests/get-by");

        const open = response.open;
        const closed = response.closed;
        const declined = response.declined;
        const granted = response.granted;

        console.log(open, closed, declined, granted);
    }
    catch (err){
        console.log(err);
    }
}