import useViews from "./useViews";
export default function (page: string) {
    let url = '';
    switch (page) {
        case '0': url = '/welcome'; break;
        case '1': url = '/play'; break;
        case '2': url = '/tobecontinue'; break;
        case '3': url = '/options'; break;
        default:
            url = '/404'
    }
    useViews(url);
};