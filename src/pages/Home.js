import Section from 'components/Section'
import React from 'react'

const Home = () => {
  const items = [
    {
      id: 1,
      title: "Soner Sarikabadayi",
      description: "Original Soundtrack",
      img: "../../img/qiz.jpg",
      type:"album",
      src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',

    },
    {
      id: 2,
      title: "Soner Sarikabadayi",
      description: "Original Soundtrack",
      img: "../../img/qiz.jpg",
      type:"album",
      src:'https://pixabay.com/sound-effects/161648/waveform.json'
    },
    {
      id: 3,
      title: "Soner Sarikabadayi",
      description: "Original Soundtrack",
      img: "../../img/qiz.jpg",
      type:"artist",
      src:'https://pixabay.com/sound-effects/129242/waveform.json'
    },
    {
      id: 4,
      title: "Soner Sarikabadayi",
      description: "Original Soundtrack",
      img: "../../img/qiz.jpg",
      type:"podcast",
      src:'https://pixabay.com/sound-effects/129880/waveform.json'
    },
    {
      id: 5,
      title: "Soner Sarikabadayi",
      description: "Original Soundtrack",
      img: "../../img/qiz.jpg",
      type:"album",
      src:"https://cdn.freesound.org/previews/654/654728_5479102-lq.mp3"

    }
  ]
  return (
    <div>
      <Section title="Recently Played" more="/lalla" items={items} />
      <Section title="Shows to try" more="/lalla" items={items} />
      <Section title="Made for Ruslan Rustemov" more="/lalla" items={items} />
    </div>
  )
}

export default Home