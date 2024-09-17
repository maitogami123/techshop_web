type DataResponseType<T> = T | Array<T>;

export type ResponseCustom<T> = {
    data: DataResponseType<T>;
    statusText: string;
    status: number;
};

// export function dataResponse<Type>(
//     data: ResponseCustom<Type>
// ): ResponseCustom<Type> {
//     if (Array.isArray(data.data)) {
//         return {
//             data: data.data,
//             statusText: data.statusText,
//             status: data.status
//         };
//     } else {
//         return {
//             data: data.data,
//             statusText: data.statusText,
//             status: data.status
//         };
//     }
// }
