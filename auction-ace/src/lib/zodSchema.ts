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

const ACCEPTED_IMAGE_TYPES = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/webp',
];

export const AddProductFormDataSchemaClient = z.object({
    prodName: z.string({
        invalid_type_error: 'typeError: prodName must be string',
    }),
    description: z.string({
        invalid_type_error: 'typeError: description must be string',
    }),
    // images: z.string({
    //     invalid_type_error: 'typeError: ImageName must be string',
    //     required_error: "You need to add an Image"
    // }),
    // images: z.instanceof(File),
    images: z
        .any()
        .refine(
            (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type)
            // 'Only .jpg, .jpeg, .png and .webp files are accepted.'
        ),
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
});

export const AddProductFormDataSchemaServer = z.object({
    prodName: z.string({
        invalid_type_error: 'typeError: prodName must be string',
    }),
    description: z.string({
        invalid_type_error: 'typeError: description must be string',
    }),
    images: z.string({
        invalid_type_error: 'typeError: ImageName must be string',
        required_error: 'You need to add an Image',
    }),
    // image: z.instanceof(File),
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
});
