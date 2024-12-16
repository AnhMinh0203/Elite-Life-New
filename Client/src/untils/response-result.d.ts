export interface ResponseResult {
    message: string;
    error: string;
    data: any;
    totalRecord: number;
    metadata?: any;
    success?: boolean;
}