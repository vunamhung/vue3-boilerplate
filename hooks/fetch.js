import useSWRV from 'swrv';
import { http } from '@/utilities';

const fetcher = (url) => http(url).then((res) => res.data);
