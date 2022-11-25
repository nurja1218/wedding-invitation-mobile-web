import { DocumentNode, useQuery, ApolloError } from '@apollo/react-hooks';
import { useEffect, useState } from 'react';

// import { needRefetchDataState } from 'recoil/atom/atoms';

interface DataResponse {
    [key: string]: any;
}

export function useData<QueryResult, VariableType>(
    query: DocumentNode,
    name: string,
    variable?: VariableType | undefined,
    mapper?: any,
): { data: QueryResult | undefined; error: ApolloError | undefined } {
    const [data, setData] = useState<QueryResult>();
    const [error, setError] = useState<ApolloError>();
    const { data: apiData, error: apiError } = useQuery<QueryResult, VariableType>(query, {
        variables: variable,
        fetchPolicy: 'network-only'
    });

    useEffect(() => {
        if (apiData) {
            if (typeof mapper === 'function') {
            } else {
                const response: DataResponse = apiData;
                setData(response[name]);
            }
        }
        if (apiError) {
            console.error(apiError.message);
            setError(apiError);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [apiData, apiError]);


    return { data, error };
}
