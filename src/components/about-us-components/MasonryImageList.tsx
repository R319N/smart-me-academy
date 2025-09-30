import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function MasonryImageList() {
    return (
        <Box sx={{ height: "100%" }}>
            <ImageList variant="masonry" cols={3} gap={8}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
}

const itemData = [
   
    {
        img: '/gallery/gallery1.jpg',
        title: 'Books',
    },
    {
       img: '/gallery/gallery2.jpg',
        title: 'Kitchen',
    },
    {
       img: '/gallery/gallery3.jpg',
        title: 'Blinds',
    },
    {
      img: '/gallery/gallery4.jpg',
        title: 'Chairs',
    },
    {
       img: '/gallery/gallery5.jpg',
        title: 'Laptop',
    },
    {
       img: '/gallery/gallery6.jpg',
        title: 'Doors',
    },
    {
      img: '/gallery/gallery7.jpg',
        title: 'Coffee',
    },
];
// {
//     img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
//     title: 'Storage',
// },
// {
//     img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
//     title: 'Candle',
// },
// {
//     img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
//     title: 'Coffee table',
// },

