import React from 'react'

// https://cdn.pixabay.com/photo/2017/02/15/12/12/cat-2068462_1280.jpg

const cat = {
  catUrl: 'https://cdn.pixabay.com/photo/',
  desciption: '2017/02/15/12/12/',
  imageId: 'cat-2068462_1280.jpg',
  name: '아기 고양이',
  imageTheme: {
    width: '200px',
    heignt: '150px'
  },
  theme: {
    backgroundColor: 'black',
    color: 'white'
  }
}

function E_JSX() {
  return (
    <>
      <div style={cat.theme}>
        <p>{cat.name}'s Picture</p>
        <img src={cat.catUrl + cat.desciption + cat.imageId} alt={cat.name} 
          width={cat.imageTheme.width} height={cat.imageTheme.heignt}/>
      </div>
    </>
  )
}

export default E_JSX