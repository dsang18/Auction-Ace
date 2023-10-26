import { z } from 'zod';

export const BidFormDataSchema = z.object({
    bid: z.string({
        required_error: 'Please Enter an Amount',
        invalid_type_error: 'Bid must be a number',
    }),
    prodId: z.string({
        invalid_type_error: 'typeError: prodId must be string',
    }),
    userId: z.string({
        invalid_type_error: 'typeError: userId must be string',
    }),
    userName: z.string({
        invalid_type_error: 'typeError: userName must be string',
    }),
});


export const AddProductFormDataSchema = z.object({
    prodName: z.string({
        invalid_type_error: 'typeError: prodName must be string',
    }),
    description: z.string({
        invalid_type_error: 'typeError: description must be string',
    }),
    images: z.string({
        invalid_type_error: 'typeError: ImageName must be string',
    }),
    price: z.number({
        invalid_type_error: 'typeError: price must be number',
    }),
    auctionEndTime: z.date({
        invalid_type_error: 'typeError: Date must be of type date',
    }),
    sellerId: z.string({
        invalid_type_error: 'typeError: userId must be string',
    }),
    sellerName: z.string({
        invalid_type_error: 'typeError: userName must be string',
    }),
})