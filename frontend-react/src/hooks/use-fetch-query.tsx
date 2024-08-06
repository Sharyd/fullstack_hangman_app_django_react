import { useQuery, QueryKey, UseQueryOptions } from '@tanstack/react-query'
import { fetchData } from '../api/fetch'

export function useFetchQuery<T>(
    endpoint: string,
    queryKey: QueryKey,
    options?: Omit<
        UseQueryOptions<T, Error, T, QueryKey>,
        'queryKey' | 'queryFn'
    >
) {
    const encodedEndpoint = encodeURI(endpoint)
    const { data, isLoading, error, refetch } = useQuery<T, Error>({
        queryKey,
        queryFn: () => fetchData<T>(encodedEndpoint),
        ...options,
    })

    return { data, isLoading, error, refetch }
}
