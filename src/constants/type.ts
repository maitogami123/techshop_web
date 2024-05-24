type DataResponseType<Type> = Type | Array<Type>;

export type ResponseCustom<Type> = {
    data: DataResponseType<Type>;
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
