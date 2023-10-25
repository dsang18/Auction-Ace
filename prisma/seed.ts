// This file is for loading the initial seed data onto the database

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.item.deleteMany()
    await prisma.item.createMany({
        data: [
            {
                itemName: 'USPA Shoes',
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque in hic, odio autem quos alias accusantium minus, voluptatibus ratione, modi a! Ullam, impedit provident maiores consectetur reprehenderit fugit praesentium aut. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quos dignissimos praesentium! Soluta eveniet nam ex, aliquid, mollitia numquam iusto obcaecati nemo facere aut incidunt hic ut quam commodi dolores fuga minima pariatur, possimus non consequuntur aperiam? Fuga sed, consectetur minima facilis temporibus nobis obcaecati magni assumenda voluptate voluptatum hic? Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque in hic, odio autem quos alias accusantium minus, voluptatibus ratione, modi a! Ullam, impedit provident maiores consectetur reprehenderit fugit praesentium aut. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quos dignissimos praesentium! Soluta eveniet nam ex, aliquid, mollitia numquam iusto obcaecati nemo facere aut incidunt hic ut quam commodi dolores fuga minima pariatur, possimus non consequuntur aperiam? Fuga sed, consectetur minima facilis temporibus nobis obcaecati magni assumenda voluptate voluptatum hic?',
                images: '/public/productImages/USPA_white_shoes.png',
                initialBid: 4500.00,
                AuctionEndTime: new Date('2023-10-28T11:00:59Z'),
                seller: 'USPA Distributor',
                sellerId: 0,
            },
            {
                itemName: 'Nike Shoes',
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque in hic, odio autem quos alias accusantium minus, voluptatibus ratione, modi a! Ullam, impedit provident maiores consectetur reprehenderit fugit praesentium aut. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quos dignissimos praesentium! Soluta eveniet nam ex, aliquid, mollitia numquam iusto obcaecati nemo facere aut incidunt hic ut quam commodi dolores fuga minima pariatur, possimus non consequuntur aperiam? Fuga sed, consectetur minima facilis temporibus nobis obcaecati magni assumenda voluptate voluptatum hic? Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque in hic, odio autem quos alias accusantium minus, voluptatibus ratione, modi a! Ullam, impedit provident maiores consectetur reprehenderit fugit praesentium aut. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quos dignissimos praesentium! Soluta eveniet nam ex, aliquid, mollitia numquam iusto obcaecati nemo facere aut incidunt hic ut quam commodi dolores fuga minima pariatur, possimus non consequuntur aperiam? Fuga sed, consectetur minima facilis temporibus nobis obcaecati magni assumenda voluptate voluptatum hic?',
                images: '/public/productImages/NikeShoes.jpg',
                initialBid: 6500.00,
                AuctionEndTime: new Date('2023-10-29T11:00:59Z'),
                seller: 'Nike Distributor',
                sellerId: 0,
            },
            {
                itemName: 'Nike Black Shoes',
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque in hic, odio autem quos alias accusantium minus, voluptatibus ratione, modi a! Ullam, impedit provident maiores consectetur reprehenderit fugit praesentium aut. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quos dignissimos praesentium! Soluta eveniet nam ex, aliquid, mollitia numquam iusto obcaecati nemo facere aut incidunt hic ut quam commodi dolores fuga minima pariatur, possimus non consequuntur aperiam? Fuga sed, consectetur minima facilis temporibus nobis obcaecati magni assumenda voluptate voluptatum hic? Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque in hic, odio autem quos alias accusantium minus, voluptatibus ratione, modi a! Ullam, impedit provident maiores consectetur reprehenderit fugit praesentium aut. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quos dignissimos praesentium! Soluta eveniet nam ex, aliquid, mollitia numquam iusto obcaecati nemo facere aut incidunt hic ut quam commodi dolores fuga minima pariatur, possimus non consequuntur aperiam? Fuga sed, consectetur minima facilis temporibus nobis obcaecati magni assumenda voluptate voluptatum hic?',
                images: '/public/productImages/NikeBlack.jpg',
                initialBid: 7500.00,
                AuctionEndTime: new Date('2023-10-30T11:00:59Z'),
                seller: 'Nike Distributor',
                sellerId: 0,
            },
            {
                itemName: 'Adidas Shoes',
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque in hic, odio autem quos alias accusantium minus, voluptatibus ratione, modi a! Ullam, impedit provident maiores consectetur reprehenderit fugit praesentium aut. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quos dignissimos praesentium! Soluta eveniet nam ex, aliquid, mollitia numquam iusto obcaecati nemo facere aut incidunt hic ut quam commodi dolores fuga minima pariatur, possimus non consequuntur aperiam? Fuga sed, consectetur minima facilis temporibus nobis obcaecati magni assumenda voluptate voluptatum hic? Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque in hic, odio autem quos alias accusantium minus, voluptatibus ratione, modi a! Ullam, impedit provident maiores consectetur reprehenderit fugit praesentium aut. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quos dignissimos praesentium! Soluta eveniet nam ex, aliquid, mollitia numquam iusto obcaecati nemo facere aut incidunt hic ut quam commodi dolores fuga minima pariatur, possimus non consequuntur aperiam? Fuga sed, consectetur minima facilis temporibus nobis obcaecati magni assumenda voluptate voluptatum hic?',
                images: '/public/productImages/AdidasShoes.jpg',
                initialBid: 5500.00,
                AuctionEndTime: new Date('2023-10-26T11:00:59Z'),
                seller: 'Adidas Distributor',
                sellerId: 0,
            },
            {
                itemName: 'Puma Shoes',
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque in hic, odio autem quos alias accusantium minus, voluptatibus ratione, modi a! Ullam, impedit provident maiores consectetur reprehenderit fugit praesentium aut. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quos dignissimos praesentium! Soluta eveniet nam ex, aliquid, mollitia numquam iusto obcaecati nemo facere aut incidunt hic ut quam commodi dolores fuga minima pariatur, possimus non consequuntur aperiam? Fuga sed, consectetur minima facilis temporibus nobis obcaecati magni assumenda voluptate voluptatum hic? Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque in hic, odio autem quos alias accusantium minus, voluptatibus ratione, modi a! Ullam, impedit provident maiores consectetur reprehenderit fugit praesentium aut. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quos dignissimos praesentium! Soluta eveniet nam ex, aliquid, mollitia numquam iusto obcaecati nemo facere aut incidunt hic ut quam commodi dolores fuga minima pariatur, possimus non consequuntur aperiam? Fuga sed, consectetur minima facilis temporibus nobis obcaecati magni assumenda voluptate voluptatum hic?',
                images: '/public/productImages/PumaShoes.jpg',
                initialBid: 3500.00,
                AuctionEndTime: new Date('2023-10-25T11:00:59Z'),
                seller: 'Puma Distributor',
                sellerId: 0,
            },
            {
                itemName: 'Redtape Shoes',
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque in hic, odio autem quos alias accusantium minus, voluptatibus ratione, modi a! Ullam, impedit provident maiores consectetur reprehenderit fugit praesentium aut. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quos dignissimos praesentium! Soluta eveniet nam ex, aliquid, mollitia numquam iusto obcaecati nemo facere aut incidunt hic ut quam commodi dolores fuga minima pariatur, possimus non consequuntur aperiam? Fuga sed, consectetur minima facilis temporibus nobis obcaecati magni assumenda voluptate voluptatum hic? Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque in hic, odio autem quos alias accusantium minus, voluptatibus ratione, modi a! Ullam, impedit provident maiores consectetur reprehenderit fugit praesentium aut. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quos dignissimos praesentium! Soluta eveniet nam ex, aliquid, mollitia numquam iusto obcaecati nemo facere aut incidunt hic ut quam commodi dolores fuga minima pariatur, possimus non consequuntur aperiam? Fuga sed, consectetur minima facilis temporibus nobis obcaecati magni assumenda voluptate voluptatum hic?',
                images: '/public/productImages/RedtapeShoes.jpg',
                initialBid: 2500.00,
                AuctionEndTime: new Date('2023-11-01T11:00:59Z'),
                seller: 'Redtape Distributor',
                sellerId: 0,
            },
        ],
    });
}

main()
    .catch(async (e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
