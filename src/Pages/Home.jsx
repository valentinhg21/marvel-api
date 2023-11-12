import {useEffect, useState, useContext} from 'react'
import { Item } from '../Components/Item'
import { DataProviderContext } from '../Context/DataProvider'
import { Hero } from '../Components/Hero'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


export const Home = () => {
  const dataContext = useContext(DataProviderContext)


  return (
    <div className="container Home">
          {dataContext.hero?.map((serie) => {
              return(
                <Hero 
                  title = {serie.title} 
                  thumbnail = {serie.thumbnail} 
                  key={serie.id}
                  id = {serie.id}
                />
              )
          })}
          <h2 className="py-4">ALL CHARACTERS</h2>
          <Swiper className="List__container" spaceBetween={15} slidesPerView={2} 
            breakpoints={{
              768: {
                spaceBetween:30,
                slidesPerView: 3
              }
            }}
          
          >
          {dataContext.characters?.map((char) => {
              return(
                <SwiperSlide className="Slides" key={char.id}>
                  <Item 
                    id = {char.id}
                    name={char.name}
                    type="characters"
                    thumbnail = {char.thumbnail}
                  />
                </SwiperSlide>
              )
          })}
          </Swiper>
          <h2 className="py-4">ALL COMICS</h2>
          <Swiper className="List__container" spaceBetween={15} slidesPerView={2}
            breakpoints={{
              768: {
                spaceBetween:30,
                slidesPerView: 3
              }
            }}
          >
            {dataContext.comics?.map((comic) => {
              return(
                <SwiperSlide className="Slides" key={comic.id}>
                  <Item 
                    id = {comic.id}
                    name={comic.title}
                    type="comics"
                    thumbnail = {comic.thumbnail}
                  />
                </SwiperSlide>
              )
            })}


          </Swiper>
          <h2 className="py-4">ALL Series</h2>
          <Swiper className="List__container" spaceBetween={15} slidesPerView={2}
            breakpoints={{
              768: {
                spaceBetween:30,
                slidesPerView: 3
              }
            }}
          
          >
            {dataContext.series?.map((serie) => {
              return(
                <SwiperSlide className="Slides" key={serie.id}>
                  <Item 
                    id = {serie.id}
                    name={serie.title}
                    type="series"
                    thumbnail = {serie.thumbnail}
                  />
                </SwiperSlide>
              )
            })}


          </Swiper>
    </div>
  )
}
