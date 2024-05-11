export function useGetAccountInfo() {
    return JSON.parse(localStorage.getItem("accountInfo"))
}